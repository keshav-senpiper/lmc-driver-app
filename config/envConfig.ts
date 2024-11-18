// import dotenv from 'dotenv';

const dotenv = require('dotenv');
dotenv.config();

const port: number = parseInt(process.env.PORT || '3000', 10);
const API_PREFIX_ADMIN: string = process.env.API_PREFIX_ADMIN || '/api/v1/admin';
const API_PREFIX_CENTER: string = process.env.API_PREFIX_CENTER || '/api/v1/center';
const API_PREFIX_CET: string = process.env.API_PREFIX_CET || '/api/v1/cet';
const API_PREFIX_DOCTOR: string = process.env.API_PREFIX_DOCTOR || '/api/v1/doctor';

// Database
const databaseName: string = process.env.DB_NAME || 'lastmileDb';
const userName: string = process.env.DB_USERNAME || 'postgres';
const password: string = process.env.DB_PASSWORD || '103Lastmilecare';
const host: string = process.env.DB_HOST || 'database-1.c1i0cmiimplb.us-east-1.rds.amazonaws.com';
const portDb: number = parseInt(process.env.DB_PORT || '5432', 10);
const JWT_ADMIN: string = process.env.JWT_ADMIN || 'abcd';
const JWT_CENTER: string = process.env.JWT_CENTER || 'abcd';

// Email
const emailApiKey: string = process.env.EMAIL_API_KEY || 'default_email_api_key';
const emailFrom: string = process.env.EMAIL_FROM || 'default_email@example.com';



// Other Keys
const secretKey: string = process.env.SECRET_KEY || 'default_secret_key';
const anotherKey: string = process.env.ANOTHER_KEY || 'default_another_key';

const TWILIO_ACCOUNT_SID: string = process.env.TWILIO_ACCOUNT_SID || 'ACABCD';
const TWILIO_AUTH_TOKEN: string = process.env.TWILIO_AUTH_TOKEN || 'ACABCD';
const TWILIO_PHONE_NUMBER: string = process.env.TWILIO_PHONE_NUMBER || '1234';

const WP_TWILIO_ACCOUNT_SID: string = process.env.WP_TWILIO_ACCOUNT_SID || 'ACABCD';
const WP_TWILIO_AUTH_TOKEN: string = process.env.WP_TWILIO_AUTH_TOKEN || 'ACABCD';
const WP_TWILIO_PHONE_NUMBER: string = process.env.WP_TWILIO_PHONE_NUMBER || '1234';
const WP_TWILIO_PHONE_NUMBER_TEMP: string = process.env.WP_TWILIO_PHONE_NUMBER_TEMP || '1234';

const prefix = {
  admin: API_PREFIX_ADMIN,
  center: API_PREFIX_CENTER,
  cet: API_PREFIX_CET,
  doctor: API_PREFIX_DOCTOR
};

const dialectOptions = {
  ssl: {
    require: false,
    rejectUnauthorized: false
  }
};

export {
  port,
  JWT_ADMIN,
  JWT_CENTER,
  prefix,
  databaseName,
  userName,
  password,
  host,
  portDb,
  emailApiKey,
  emailFrom,
  secretKey,
  anotherKey,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
  WP_TWILIO_ACCOUNT_SID,
  WP_TWILIO_AUTH_TOKEN,
  WP_TWILIO_PHONE_NUMBER,
  WP_TWILIO_PHONE_NUMBER_TEMP,

  dialectOptions
};
