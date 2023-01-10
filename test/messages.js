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

const newMessage= {
  email: "clara@gmail.com",
    names: "Klara Isingizwe",
    message: "Hello developer, we want to hire you"
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
        .get('/api/message/63bd5f190a7943ae62a5cee3')
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
    it('it should check a single  message Id', (done) => {
      chai.request(app)
        .get('/api/message/63bd5f190a7943ae62a5ce')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });

  describe('/post', () => {
    it('it should create a message', (done) => {
      chai.request(app)
        .post('/api/message')
        .send(newMessage)
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          done();
        });
    });
  });
  
});