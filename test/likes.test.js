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

const mylike= {
  userId:"639afec428f5b2436860dd8a",
  blogId: "63b97280f7723546cfd22a42"
}

const mylikeFake= {
  userId:"639afec428f5b2436860dd",
  blogId: "63b97280f7723546cfd22a42"
}

let accesstoken = null
describe("likes API test", () => {
  describe('/Patch', () => {
    beforeEach((done) => {
      chai.request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          accesstoken = res.body.accesstoken;
          done();
        });
    });
    it('it should like', (done) => {
      chai.request(app)
        .patch('/api/like')
        .set('Authorization', `Bearer ${accesstoken}`)
        .send(mylike)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/Patch', () => {
    beforeEach((done) => {
      chai.request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          accesstoken = res.body.accesstoken;
          done();
        });
    });
    it('it should chech if he user id is valid exist before liking', (done) => {
      chai.request(app)
        .patch('/api/like')
        .set('Authorization', `Bearer ${accesstoken}`)
        .send(mylikeFake)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });

  

  describe('/Patch', () => {
    beforeEach((done) => {
      chai.request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          accesstoken = res.body.accesstoken;
          done();
        });
    });
    it('it should unlike', (done) => {
      chai.request(app)
        .patch('/api/unlike')
        .set('Authorization', `Bearer ${accesstoken}`)
        .send(mylike)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  

})