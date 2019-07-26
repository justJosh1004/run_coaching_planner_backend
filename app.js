const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose
  .connect(
    `mongodb+srv://josh:${
      process.env.MONGO_ATLAS_PW
    }@cluster0-afuh4.mongodb.net/test?retryWrites=true&w=majority`,
    { useCreateIndex: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to Database!');
  })
  .catch(() => {
    console.log('Connection Failed!');
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

module.exports = app;
