import  app  from './../src/index.js';
import chai from 'chai';
import { expect } from'chai';
import chaiHttp from'chai-http';
import { describe, it } from 'mocha'

chai.use(chaiHttp);

describe("Message API test", () => {
  describe('/GET', () => {
    it('it should GET all messages', (done) => {
      chai.request(app)
        .get('/api/messages')
        .end((err, res) => {
          expect(res.statusCode).to.equal(403);
          done();
        });
    });
  });

  describe('/GET', () => {
    it('it should GET a single  message', (done) => {
      chai.request(app)
        .get('/api/message/:id')
        .end((err, res) => {
          expect(res.statusCode).to.equal(403);
          done();
        });
    });
  });

  describe('/post', () => {
    it('it should create a message', (done) => {
      chai.request(app)
        .post('/api/message')
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
    });
  });
  
});