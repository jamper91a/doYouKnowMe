/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  '/': { action: 'view-home' },
  '/addQuestion': { action: 'view-add-question' },
  '/finish': { action: 'view-finish-quiz' },
  '/quiz/:email': { action: 'view-quiz' },
  '/resolve/:email': { action: 'view-resolve' },
  '/finished': { action: 'view-quiz-finished' },
  '/options/filter': { action: 'options/filter' },


  'POST /friend/add' : 'friend/add',
  'POST /question/add' : 'question/add',
  'POST /question/answer' : 'question/answer',
  'POST /question/get' : 'question/get',
  'POST /quiz/create' : 'quiz/create',
  'POST /quiz/finish' : 'quiz/finish',
  'POST /quiz/get' : 'quiz/get'





};
