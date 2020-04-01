module.exports = {


  friendlyName: 'Add',


  description: 'Add friend.',


  inputs: {
    name:    {type: 'string', required: true},
    // email:    {type: 'string', required: true},
  },


  exits: {

  },


  fn: async function (inputs) {
    //Find the quiz with the email provided
    const quiz = await sails.helpers.quiz.getQuizByEmail(this.req.session.quiz.user.uuid);
    const friend = await Friend.create({quiz: quiz.id, name: inputs.name, score: 0}).fetch();
    this.req.session.friend = friend;
    return friend;

  }


};
