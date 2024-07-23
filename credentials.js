require('dotenv').config()

module.exports = {
    validCredentials: {
      username: process.env.VALID_USERNAME,
      password: process.env.VALID_PASSWORD
    },
    emptyCredentials: {
        username: process.env.EMPTY_USERNAME,
        password: process.env.EPMTY_PASSWORD
      },
    invalidCredentials: 
      {
        username: process.env.INVALID_USERNAME,
        password: process.env.INVALID_PASSWORD
      }
  };
