const { v4: uuidv4 } = require('uuid');
var flaverr = require('flaverr');
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


  fn: async function (inputs, exits) {
    try {
      const quiz = await sails.getDatastore()
        .transaction(async (db) => {
          //Check if an user exits with that email
          const userExits = await User.find({email: inputs.email}).usingConnection(db);
          if (!userExits || userExits.length === 0) {
            inputs.uuid = uuidv4();
            const user = await User.create(inputs).fetch().usingConnection(db);
            const quiz = await Quiz.create({
              user: user.id,
              state: sails.config.custom.QUIZ_STATE.STARTED
            }).fetch().usingConnection(db);
            if (this.req.session) {
              this.req.session.user = user;
              this.req.session.name = inputs.name;
              this.req.session.email = inputs.email;
              this.req.session.uuid = inputs.uuid;
            }
            return quiz;
          } else {
            throw flaverr('emailAlreadyUsed', new Error('emailAlreadyUsed'));
          }
        })
        .intercept('emailAlreadyUsed', () => {
          return exits.emailAlreadyUsed();
        });
      return exits.success(quiz);
    } catch (e) {
      // console.error(e);
    }

  }


};
