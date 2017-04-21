var chai = require('chai');
var request = require('supertest-as-promised');
var expect = chai.expect();
var app = require('./index.js');
var agent = request.agent(app);
var User = require('../db/models/users');

describe('Location', function() {
  it('returns weather information about location entered', function() {
      agent
      .get(`/api/location/New%20York`)
      .expect(200)
      .expect(function(res){
        expect(res.body.currently).to.be.an.instanceOf(Object);
        expect(res.body.address).to.equal('New York, NY, USA');
        expect(res.body.daily).to.be.an.instanceOf(Object);
        expect(res.body.past).to.be.an.instanceOf(Array);
      });
    });
},
describe('User', function() {
  it('logs in a user', function() {
    User.create({
      email: 'test123@test.test',
      password: 'test'
    })
    .then((user) => {
      agent
      .post(`/api/user/login`)
      .send({email: 'test123@test.test', password: 'test'})
      .expect(200)
      .expect(function(res){
        expect(res.body.id).to.be.equal(user.id);
      });
    });
  });

  it('creates a user, and logs them in', function() {
      agent
      .post(`/api/user/signup`)
      .send({email: 'test234@test.test', password: 'test'})
      .expect(200)
      .expect(function(res){
        expect(res.body.id).to.be.not(null);
      })
      .then(() => {
        agent
        .get('/api/user/me')
        .expect(function(res){
          expect(res.body.id).to.be.not(null);
        });
      });
    });

    it('logs out a user', function() {
      agent
      .post(`/api/user/signup`)
      .send({email: 'test234@test.test', password: 'test'})
      .expect(200)
      .expect(function(res){
        expect(res.body.id).to.be.not(null);
      })
      .then(() => {
        agent
        .get('/api/user/logout')
        .expect(200)
        .then(() => {
          agent.get('/api/user/me')
          .expect(function(res){
            expect(res.body).to.be(null);
          });
        });
      });
    });

    it('saves a users queries', function() {
      agent
      .post(`/api/user/signup`)
      .send({email: 'test345@test.test', password: 'test'})
      .then(() => {
        agent
        .post('/api/user/query')
        .send({location: 'New York'})
        .expect(200)
        .then(() => {
          agent.get('/api/user/queries')
          .expect(function(res){
            expect(res.body).to.be.an.instanceOf(Array);
          });
        });
      });
    });
}));

