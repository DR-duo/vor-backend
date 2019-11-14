const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/positional-rectangles", (req, res, next) => {
  const endpoint = `http://localhost:21337/positional-rectangles`;
  return axios
    .get(endpoint)
    .then(response => res.send(response.data))
    .catch(error => console.log(error));
});

module.exports = router;
