"use strict";

/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */


module.exports = (req, res, next) => {
  if(req.session.user)
    return next();
  req.session.error = sails.__('Not allowed');
  // otherwise if this is an HTML-wanting browser, do a redirect.
  return res.redirect('/');

};
