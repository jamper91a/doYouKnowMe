module.exports = {


  friendlyName: 'Get questions',


  description: '',


  inputs: {
    email:    {type: 'string', required: true},
  },


  exits: {

  },


  fn: async function ({email}) {
    //Find the quiz with the email provided
    const quiz = await sails.helpers.quiz.getQuizByEmail(email);
    //Get all the questions for that quiz
    const questions = await Question.find({quiz: quiz.id});
    // All done.
    return questions;

  }


};
