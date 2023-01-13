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

const newBlog= {
  title: "hello",
  description: "description",
  content: "content",
  image: "http://res.cloudinary.com/dsotw5uoz/image/upload/v1673275211/projects/myBrand/47fbac7a-fa56-4ccc-ae3f-cf9eed078de3_1673275206.015.jpg",
  created_on: new Date()
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
    it('it create a blog', (done) => {
      chai.request(app)
        .post('/api/add-blog')
        .set('Authorization', `Bearer ${accesstoken}`)
        .send(newBlog)
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          done();
        });
    });
  });
  describe('/post', () => {
    it('it should show that something is wrong in creating blog', (done) => {
      chai.request(app)
        .post('/api/add-blog')
        .set('Authorization', `Bearer ${accesstoken}`)
        .send(newBlog)
        .end((err, res) => {
          expect(res.statusCode).to.equal(500);
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
        .get('/api/get-blog/63bae91c8b7beb116f578483')
        //.send(id)
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/GET', () => {
    it('it should know an invalid Id', (done) => {
      chai.request(app)
        .get('/api/get-blog/63bae91c8b7beb116f57')
        //.send(id)
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });
  describe('/delete', () => {
    it('it should show there is no content if the blog to delete is not there ', (done) => {
      chai.request(app)
        .delete('/api/del-blog/63bac6ae8ea83855dd16')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });
  describe('/delete', () => {
    it('it should delete a blog', (done) => {
      chai.request(app)
        .delete('/api/del-blog/639a0c5e4572e5da19c9f38c')
        .set('Authorization', `Bearer ${accesstoken}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(204);
          done();
        });
    });
  });


  describe('/Get', () => {
    it('it should get all comments of the  blog', (done) => {
      chai.request(app)
        .get('/api/blog/63b97280f7723546cfd22a42/comments')
        
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/Get', () => {
    it('it should get all likes of the  blog', (done) => {
      chai.request(app)
        .get('/api/blog/63b97280f7723546cfd22a42/likes')
        
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/Get', () => {
    it('it should print an error in getting likes', (done) => {
      chai.request(app)
        .get('/api/blog/63b97280f7723546cfd22/likes')
        
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });




  



  
  
 });



