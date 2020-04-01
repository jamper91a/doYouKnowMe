module.exports = {


  friendlyName: 'Get',


  description: 'Get quiz.',


  inputs: {
    email:    {type: 'string', required: true}
  },


  exits: {

  },


  fn: async function ({email}) {
    const quiz = await sails.helpers.quiz.getQuizByEmail(email);
    //Get friends
    const friends = await Friend.find({quiz: quiz.id});
    // All done.
    return {
      quiz,
      friends
    };

  }


};
