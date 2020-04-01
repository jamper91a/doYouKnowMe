/**
 * Question.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    question: {type: 'string'},
    image:    {type: 'string', allowNull: true},
    answer1:    {type: 'string', allowNull: true},
    image1:    {type: 'string', allowNull: true},
    answer2:    {type: 'string', allowNull: true},
    image2:    {type: 'string', allowNull: true},
    answer3:    {type: 'string', allowNull: true},
    image3:    {type: 'string', allowNull: true},
    answer4:    {type: 'string', allowNull: true},
    image4:    {type: 'string', allowNull: true},
    answer5:    {type: 'string', allowNull: true},
    image5:    {type: 'string', allowNull: true},
    answer6:    {type: 'string', allowNull: true},
    image6:    {type: 'string', allowNull: true},
    lang:    {type: 'string', allowNull: true},

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },

};

