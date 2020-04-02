module.exports = {


  friendlyName: 'View resolve',


  description: 'Display "Resolve" page.',

  inputs: {
    email:    {type: 'string', required: true}
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/resolve'
    },
    redirect: {
      responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {
    try {
      const quiz = await sails.helpers.quiz.getQuizByEmail(inputs.email);
      //Get all the questions for that quiz
      const questions = await Question.find({quiz: quiz.id});
      if(questions && questions.length > 0) {
        //Mix the answers to make them aleatory
        var numbers = [1, 2, 3, 4, 5, 6];
        function shuffle(o) {
          for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
        questions.forEach(function (question) {
          var random = shuffle(numbers);
          const questionAux =  Object.assign({}, question);
          question.answer1 = questionAux['answer'+random[0]];
          question.answer2 = questionAux['answer'+random[1]];
          question.answer3 = questionAux['answer'+random[2]];
          question.answer4 = questionAux['answer'+random[3]];
          question.answer5 = questionAux['answer'+random[4]];
          question.answer6 = questionAux['answer'+random[5]];
        });

        // All done.
        return exits.success({questions});
      } else {
        throw 'noQuestions';
      }

    } catch (e) {
      if(e.code)
        this.req.session.errors = e.code;
      else
        this.req.session.errors = e;
      return exits.redirect('/');
    }


  }


};
