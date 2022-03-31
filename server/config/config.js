require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const cookieParser = require('cookie-parser');

const FileStore = sessionFileStore(session);

const config = (app) => {
  // Use
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(session({
    key: 'user_sid',
    secret: `${process.env.SECRET_WORD}`,
    store: new FileStore(),
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }));
};

module.exports = config;
