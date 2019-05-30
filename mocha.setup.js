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
