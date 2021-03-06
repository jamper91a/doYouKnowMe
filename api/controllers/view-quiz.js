module.exports = {


  friendlyName: 'View quiz',


  description: 'Display "Quiz" page.',

  inputs: {
    email:    {type: 'string', required: true}
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/quiz'
    },
    redirect: {
      responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {
    try {
      const quiz = await sails.helpers.quiz.getQuizByEmail(inputs.email);
      //Get friends
      const friends = await Friend.find({quiz: quiz.id}).sort('score DESC');

      this.req.session.quiz = quiz;

      let meta = {
        url: sails.config.custom.baseUrl + 'quiz/' + quiz.user.uuid,
        title: sails.__('Do you know') + ' ' + quiz.user.name + '?',
        description: sails.__('Check how well you know') + ' ' + quiz.user.name,
        image: 'https://previews.123rf.com/images/deltaart/deltaart1411/deltaart141100002/33168823-do-you-know-.jpg',
      };
      // All done.
      return exits.success({
        meta,
        quiz,
        friends
      });
    } catch (e) {
      // console.log(e.code);
      // throw { redirect: {error: e.code} };
      // return exits.redirect({e});
      this.req.session.errors = e.code;
      return exits.redirect('/');
    }

  }


};
