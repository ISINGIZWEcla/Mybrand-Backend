import  app  from '../src/index.js';
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

describe("Blog API test", () => {
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
    it('it should create a blog', (done) => {
      chai.request(app)
        .post('/api/add-blog')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          done();
        });
    });
  });
  describe('/GET', () => {
    it('it should GET all blogs', (done) => {
      chai.request(app)
        .get('/api/get-blogs')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  

  describe('/GET', () => {
    it('it should GET a single  blog', (done) => {
      chai.request(app)
        .get('api/get-blog/63bae91c8b7beb116f578483')
        //.send(id)
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

//   describe('/post', () => {
//     it('it should create a user', (done) => {
//       chai.request(app)
//         .post('/api/add-users')
//         .send(newUser)
//         .end((err, res) => {
//           expect(res.statusCode).to.equal(400);
//           done();
//         });
//     });
//   });
//   describe('/delete', () => {
//     it('it should delete user', (done) => {
//       chai.request(app)
//         .post('/api/del-user/63b95dcdadbdaba7741da')
//         .end((err, res) => {
//           expect(res.statusCode).to.equal(400);
//           done();
//         });
//     });
//   });
  
 });



