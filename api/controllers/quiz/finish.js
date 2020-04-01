module.exports = {


  friendlyName: 'Finish',


  description: 'Finish quiz.',


  inputs: {
    email:    {type: 'string', required: true},
  },


  exits: {

  },


  fn: async function ({email}) {

    //Find the quiz wit the email provided
    const user = await User.findOne({uuid:email});
    await Quiz.updateOne({user:user.id}).set({state: sails.config.custom.QUIZ_STATE.FINISHED});
    return {};

  }


};
