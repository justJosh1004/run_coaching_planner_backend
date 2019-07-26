const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(
    `mongodb+srv://josh:${
      process.env.MONGO_ATLAS_PW
    }@cluster0-afuh4.mongodb.net/test?retryWrites=true&w=majority`,
    { userCreateIndex: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to Database!');
  })
  .catch(() => {
    console.log('Connection Failed!');
  });

module.exports = app;
