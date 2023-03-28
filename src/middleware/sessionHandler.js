import session from 'express-session';
import express from 'express';
import crypto from 'crypto';

const sessionHandler = express.Router();

/* session configuration */
const details = {
  secure: false, /* http utan SSL (https) */
  saveUninitialized: true,
  secret: crypto.randomUUID(),
  resave: false
}


sessionHandler.use(session(details));

export default sessionHandler;