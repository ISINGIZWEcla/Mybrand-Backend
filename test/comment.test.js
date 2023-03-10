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

const comment= {
  email: "clara@gmail.com",
    names: "Klara Isingizwe",
    comment: "Hello developer, we want to hire you",
    blogId: "63b97280f7723546cfd22a42"
}

const commentfalse= {
  email: "clara@gmail.com",
    names: "Klara Isingizwe",
    comment: "Hello developer, we want to hire you",
    blogId: "63b97280f7723546c"
}

let accesstoken = null
describe("Comment API test", () => {
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
    it('it should GET all comments', (done) => {
      chai.request(app)
        .get('/api/comments')
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
    it('it should GET a single  comment', (done) => {
      chai.request(app)
        .get('/api/comment/63a43269e196080fae88cd8d')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/post', () => {
    it('it should create a comment', (done) => {
      chai.request(app)
        .post('/api/comment')
        .set('Authorization', `Bearer ${accesstoken}`)
        .send(comment)
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          done();
        });
    });
  });

  
  
 });