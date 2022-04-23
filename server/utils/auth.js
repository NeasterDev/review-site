const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      //console.log("header seen");
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    if (!token) {
      return req;
    }
   // console.log(token);
    try {
      const { data } = jwt.verify(token, secret);
      req.user = data;
    } catch(error) {
      console.log(error);
    }
    //console.log(req.user);
    return req;
  },
  signToken: function({ username, _id }) {
    const payload = { username, _id };

    return jwt.sign({ data: payload }, secret);
  }
};