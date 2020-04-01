module.exports = {


  friendlyName: 'View add question',


  description: 'Display "Add question" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/add-question'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
