var flaverr = require('flaverr');
module.exports = {


  friendlyName: 'Get quiz by email',


  description: '',


  inputs: {
    email:    {type: 'string', required: true},
  },


  exits: {

    success: {
      outputFriendlyName: 'Quiz by email',
    },
    noQuiz: {
      description: 'No quiz found for that user'
    },
    noUser: {
      description: 'No user found for that email'
    }

  },


  fn: async function (inputs, exits) {

    const quiz = await sails.getDatastore()
      .transaction(async (db) => {
        //Find the quiz wit the email provided
        const user = await User.findOne({uuid:inputs.email}).usingConnection(db);
        if(user) {
          const quiz = await Quiz.findOne({user:user.id}).populate('user').usingConnection(db);
          if(quiz) {
            return quiz;
          } else {
            throw flaverr('noQuiz', new Error('noQuiz'));
          }
        } else {
          throw flaverr('noUser', new Error('noUser'));
        }
      })
      .intercept('noQuiz', () => {
        return exits.noQuiz();
      })
      .intercept('noUser', () => {
        return exits.noUser();
      });
    return exits.success(quiz);



  }


};

