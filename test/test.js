import app from './../src/index.js';
import chai, { expect } from 'chai';
import chaiHttp from "chai-http";
import { describe, it } from 'mocha';


chai.use(chaiHttp);

describe("API test", () => {
  describe('/GET Welcome', () => {
    it('it should GET welcome message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('/all unspecified routes', () => {
    it('it should handle all unspecified routes', (done) => {
      chai.request(app)
        .get('/ghyy')
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });
});