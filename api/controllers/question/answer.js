module.exports = {


  friendlyName: 'Answer question',


  description: '',


  inputs: {
    // email:    {type: 'string', required: true},
    question: {type: 'number', required: true},
    answer: {type: 'string', required: true},
    friend: {type: 'number', required: true},
  },


  exits: {

    alreadyAnswered: {},
    questionNotValid: {}
  },


  fn: async function (inputs) {
    //Find the quiz with the email provided
    // const quiz = await sails.helpers.quiz.getQuizByEmail(inputs.email);
    try {
      const question = await Question.findOne({id: inputs.question});
      if (question) {
        //Find the friend
        const friend = await Friend.findOne({id: inputs.friend});
        //Check friend has not answer that question before
        if (!friend.questions.includes(inputs.question)) {
          //Validate the answer
          if (inputs.answer === question.answer1) {
            await Friend.updateOne({id: inputs.friend}).set({
              score: friend.score + 1,
              questions: friend.questions + ',' + inputs.question
            });
          } else {
            await Friend.updateOne({id: inputs.friend}).set({
              questions: friend.questions + ',' +inputs.question
            });
          }
          return {answer: question.answer1};
        } else {
          throw 'alreadyAnswered';
        }
      } else {
        throw 'questionNotValid';
      }
    } catch (e) {
      return e;
    }

  }


};
