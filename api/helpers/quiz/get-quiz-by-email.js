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


  fn: async function ({email}) {

    //Find the quiz wit the email provided
    const user = await User.findOne({uuid:email});
    if(user) {
      const quiz = await Quiz.findOne({user:user.id}).populate('user');
      if(quiz) {
        return quiz;
      } else {
        throw 'noQuiz';
      }
    } else {
      throw 'noUser';
    }
  }


};

