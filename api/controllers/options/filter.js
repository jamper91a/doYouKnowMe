module.exports = {


  friendlyName: 'Filter',


  description: 'Filter options.',


  inputs: {
    key: {type: 'string'},
    lang: {type: 'string'}
  },


  exits: {

  },


  fn: async function (inputs) {
    const options = await Options.find(
      {
        where: {
          question: {
            contains: inputs.key
          },
          lang: inputs.lang
        }
      });

    return {data:options};

  }


};
