const { v4: uuidv4 } = require('uuid');
module.exports = {


  friendlyName: 'Create',


  description: 'Create quiz using the user information',


  inputs: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    }
  },


  exits: {
    emailAlreadyUsed:{
      description: 'Email already taken',
      responseType: 'badRequest'
    }
  },


  fn: async function (inputs) {
    //Check if an user exits with that email
    const userExits = await User.find({email: inputs.email});
    console.log(userExits);
    if(!userExits || userExits.length === 0) {
      inputs.uuid = uuidv4();
      const user = await User.create(inputs).fetch();
      const quiz = await Quiz.create({user: user.id, state: sails.config.custom.QUIZ_STATE.STARTED}).fetch();
      if(this.req.session) {
        this.req.session.user = user;
        this.req.session.name = inputs.name;
        this.req.session.email = inputs.email;
        this.req.session.uuid = inputs.uuid;
      }
      return quiz;
    } else {
      throw {emailAlreadyUsed:[]};
    }


  }


};
