/**
 * Production environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for production.  The configuration in this file
 * is only used in your production environment, i.e. when you lift your app using:
 *
 * ```
 * NODE_ENV=production node app
 * ```
 *
 * > If you're using git as a version control solution for your Sails app,
 * > this file WILL BE COMMITTED to your repository by default, unless you add
 * > it to your .gitignore file.  If your repository will be publicly viewable,
 * > don't add private/sensitive data (like API secrets / db passwords) to this file!
 *
 * For more best practices and tips, see:
 * https://sailsjs.com/docs/concepts/deployment
 */

module.exports = {


  datastores: {
    default: {
      adapter: 'sails-mysql',
      url: 'mysql://doYouKnowMe:`ZdHk+MwMa0b7X2F@127.0.0.1:3306/doyouknowme'
    },

  },
  models: {
    migrate: 'safe',
  },
  blueprints: {
    shortcuts: false,
  },
  security: {
    cors: {
      allowOrigins: []
    },
  },
  session: {
    adapter: '@sailshq/connect-redis',
    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    },

  },
  sockets: {
    onlyAllowOrigins: [],
  },
  log: {
    level: 'debug'
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000
  },
  port: 80,
  ssl: {
    ca: require('fs').readFileSync(require('path').resolve(__dirname,'../ssl/doyouknowme_co.ca-bundle')),
    key: require('fs').readFileSync(require('path').resolve(__dirname,'../ssl/doyouknowme_co_key.txt')),
    cert: require('fs').readFileSync(require('path').resolve(__dirname,'../ssl/doyouknowme_co.crt')),
    //requestCert: true,
    //rejectUnauthorized: false
  },

  custom: {
    baseUrl: 'https://e2ddf18b.ngrok.io/',
    internalEmailAddress: 'support@example.com',
    paypal: {
      account: 'jamper91nz-facilitator@outlook.com',
      clientId: 'AX9efvh_xTUr9-B0yc5oTWdLEByWXS8H4vTmdy_qqlfsZpjnLKtKaPET1VHx8DZJRK57tkHgyKwkx8Yf'
    },
    recapchat: {
      siteKey: '6Lc_p-UUAAAAAC98YPMz15PJfwKpgIo21uKp7MAH',
      secretKey: '6Lc_p-UUAAAAAMq_dfhcmsP6KdfwC49XmTDzxemi'
    },
    recapchat2: {
      siteKey: '6Ldfp-UUAAAAAKRbILE-nE0SGT1PnjqcFNsHyDm8',
      secretKey: '6Ldfp-UUAAAAAFDBjZky_bjZfQHwRsBEMVVvsB3Q'
    }
  },



};
