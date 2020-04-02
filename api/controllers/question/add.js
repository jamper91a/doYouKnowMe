var flaverr = require('flaverr');
module.exports = {


  friendlyName: 'Add',


  description: 'Add question.',


  inputs: {
    // email:    {type: 'string', required: true},
    question: {type: 'string', required: true},
    image: {type: 'string', required: false},
    answer1: {type: 'string', required: true},
    image1: {type: 'string', required: false},
    answer2: {type: 'string', required: true},
    image2: {type: 'string', required: false},
    answer3: {type: 'string', required: false},
    image3: {type: 'string', required: false},
    answer4: {type: 'string', required: false},
    image4: {type: 'string', required: false},
    answer5: {type: 'string', required: false},
    image5: {type: 'string', required: false},
    answer6: {type: 'string', required: false},
    image6: {type: 'string', required: false},
    lang: {type: 'string', required: true}
  },


  exits: {
    notAllow: {
      description: 'Question not added because edit quiz has finished',
      responseType: 'badRequest'
    },
  },


  fn: async function (inputs, exits) {
    const lang = inputs.lang;
    const aux = Object.assign({}, inputs);
    try {
      const data = await sails.getDatastore()
        .transaction(async (db) => {
          //Find the quiz wit the email provided
          const quiz = await sails.helpers.quiz.getQuizByEmail(this.req.session.uuid);
          if (quiz.state === sails.config.custom.QUIZ_STATE.STARTED) {
            inputs.quiz = quiz.id;
            await Question.create(inputs).usingConnection(db);
            //Add question to the options
            try {
              inputs.answer1 = '';
              inputs.lang = lang;
              const option = await Options.findOne({question: inputs.question}).usingConnection(db);
              if (option === undefined) {
                await Options.create(aux).usingConnection(db);
              }
            } catch (e) {
            }

            return {};
          } else {
            throw flaverr('notAllow', new Error('notAllow'));
          }
        })
        .intercept('notAllow', () => {
          this.req.session.errors = 'notAllow';
          return exits.notAllow();
        });
      return exits.success(data);
    } catch (e) {
      // console.error(e);
    }

  }


};
