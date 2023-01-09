import  app  from './../src/index.js';
import chai from 'chai';
import { expect } from'chai';
import chaiHttp from'chai-http';
import { describe, it } from 'mocha'

chai.use(chaiHttp);
const user = {
  email: 'klaraisingizwe@gmail.com',
  password: 'Isingizwe22'
}

let accesstoken = null
describe("Message API test", () => {
  describe('/GET', () => {
    beforeEach((done) => {
      chai.request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          accesstoken = res.body.accesstoken;
          done();
        });
    });
    it('it should GET all messages', (done) => {
      chai.request(app)
        .get('/api/messages')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/GET', () => {
    beforeEach((done) => {
      chai.request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          accesstoken = res.body.accesstoken;
          done();
        });
    });
    it('it should GET a single  message', (done) => {
      chai.request(app)
        .get('/api/message/:id')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/post', () => {
    it('it should create a message', (done) => {
      chai.request(app)
        .post('/api/message')
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          done();
        });
    });
  });
  
});