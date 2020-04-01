module.exports = {


  friendlyName: 'View quiz finished',


  description: 'Display "Quiz finished" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/quiz-finished'
    }

  },


  fn: async function () {
    const friend = await Friend.findOne({id: this.req.session.friend.id});
    // Respond with view.
    return {friend};

  }


};
