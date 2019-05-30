// A dead simple ES6 async/await support hack for ExpressJS
// Import this script somewhere **before** you start using express
import 'express-async-errors';
import dotenv from 'dotenv';
import supertest from 'supertest';
import sinon from 'sinon';
import chai from 'chai';
import sinon_chai from 'sinon-chai';

chai.use(sinon_chai);

global.supertest = supertest;
global.sinon = sinon;
global.expect = chai.expect;

dotenv.config();
