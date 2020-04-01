module.exports = {


  friendlyName: 'View finish quiz',


  description: 'Display "Finish quiz" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/finish-quiz'
    }

  },


  fn: async function () {

    const shareUrl = sails.config.custom.baseUrl + 'quiz/' + this.req.session.uuid;
    // Respond with view.
    return {shareUrl: shareUrl};

  }


};
