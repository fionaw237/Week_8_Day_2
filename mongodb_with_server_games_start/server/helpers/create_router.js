const express = require('express');

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    res.send("hello world!");
  });

  return router;

};

module.exports = createRouter;
