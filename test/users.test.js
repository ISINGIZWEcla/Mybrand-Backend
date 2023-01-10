import  app  from '../src/index.js';
import chai from 'chai';
import { expect } from'chai';
import chaiHttp from'chai-http';
import { describe, it } from 'mocha'

chai.use(chaiHttp);
const newUser={
  names:'Clarisse Isingizwe',
  email: 'ishimwe@gmail.com',
  password:"Ishimwe123"
}
const id= '63a0810c19cd1cff15e7e9f0'
const user = {
  email: 'klaraisingizwe@gmail.com',
  password: 'Isingizwe22'
}

const userfalse = {
  email: 'klaraisingizwe@gmail.com',
  password: 'Isingizwe'
}

let accesstoken = null


describe('/post', () => {
  it('it should create a user', (done) => {
    chai.request(app)
      .post('/api/add-users')
      .send(newUser)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
});

describe("USER API test", () => {
  beforeEach((done) => {
    chai.request(app)
      .post('/api/login')
      .send(user)
      .end((err, res) => {
        accesstoken = res.body.accesstoken;
        done();
      });
  });
  describe('/post', () => {
    it('it should login', (done) => {
      chai.request(app)
        .post('/api/login')
        .send(user)
        .end((err, res) => {
          accesstoken = res.accesstoken;
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/post', () => {
    it('it should check user credentials', (done) => {
      chai.request(app)
        .post('/api/login')
        .send(userfalse)
        .end((err, res) => {
          accesstoken = res.accesstoken;
          expect(res.statusCode).to.equal(401);
          done();
        });
    });
  });

  describe('/GET', () => {
    it('it should GET user profile', (done) => {
      chai.request(app)
        .get('/api/profile')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          done();
        });
    });
  });
  describe('/GET', () => {
    it('it should GET all users', (done) => {
      chai.request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  

  describe('/GET', () => {
    it('it should GET a single  users', (done) => {
      chai.request(app)
        .get('/api/users/63a0810c19cd1cff15e7e9f0')
        //.send(id)
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  
  describe('/delete', () => {
    it('it should delete user', (done) => {
      chai.request(app)
        .delete('/api/del-user/639adb003f6b1635afde31d2')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });
  
});



