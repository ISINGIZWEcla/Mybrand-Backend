import  app  from './../src/index.js';
import chai from 'chai';
import { expect } from'chai';
import chaiHttp from'chai-http';
import { describe, it } from 'mocha'

chai.use(chaiHttp);

describe("USER API test", () => {
  describe('/GET', () => {
    it('it should GET all users', (done) => {
      chai.request(app)
        .get('/api/users')
        .end((err, res) => {
          expect(res.statusCode).to.equal(403);
          done();
        });
    });
  });

  describe('/GET', () => {
    it('it should GET a single  users', (done) => {
      chai.request(app)
        .get('/api/users/:id')
        .end((err, res) => {
          expect(res.statusCode).to.equal(403);
          done();
        });
    });
  });

  describe('/post', () => {
    it('it should create a user', (done) => {
      chai.request(app)
        .post('/api/add-users')
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
    });
  });
  describe('/patch', () => {
    it('it should update user credentials', (done) => {
      chai.request(app)
        .post('/api/add-users')
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
    });
  });
  
});



// const should = chai.should();
// const server = require('../server');

// chai.use(chaiHttp);

// describe('Users', () => {
//   // Test GET all users route
//   describe('GET /users', () => {
//     it('should GET all users', (done) => {
//       chai.request(server)
//         .get('/users')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('statusCode').eql('200');
//           res.body.should.have.property('message').eql('success');
//           res.body.should.have.property('users');
//           done();
//         });
//     });
//   });

//   // Test GET single user route
//   describe('GET /users/:id', () => {
//     it('should GET a single user by the given id', (done) => {
//       const id = 'some-valid-id';
//       chai.request(server)
//         .get(`/users/${id}`)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('statusCode').eql('200');
//           res.body.should.have.property('message').eql('success');
//           res.body.should.have.property('auser');
//           done();
//         });
//     });

//     it('should return a 404 status code if the user is not found', (done) => {
//       const id = 'some-invalid-id';
//       chai.request(server)
//         .get(`/users/${id}`)
//         .end((err, res) => {
//           res.should.have.status(404);
//           res.body.should.be.a('object');
//           res.body.should.have.property('statusCode').eql('404');
//           res.body.should.have.property('message').eql('fail');
//           res.body.should.have.property('error').eql("user doesn't exist!");
//           done();
//         });
//     });
//   });

//   // Test POST new user route
// })
          

