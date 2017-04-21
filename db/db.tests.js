var chai = require('chai');
var chaiProperties = require('chai-properties');
var chaiThings = require('chai-things');
var db = require('./index.js');
chai.use(chaiProperties);
chai.use(chaiThings);
var expect = chai.expect;
var User = require('./models/users');
var Queries = require('./models/queries');


before('wait for the db', () => db.didSync);

describe('user model', () => {
	it('has the expected schema definition', () => {
		expect(User.attributes.email).to.be.an('string');
		expect(User.attributes.password).to.be.an('string');
	});
	it('can create a user', () => {
      User.create({email: 'aa@aol.com', password: 'secretPass123'})
      .then(newUser => expect(newUser.email).to.equal('aa@aol.com'));
	});
	it('email must be in email format', () => {
      let user = User.build({email: 'joe'});
      return user.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error);
      });
    });
	it('email must be not null', () => {
      let user = User.build({email: ''});
      return user.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error);
      });
    });
});

describe('Queries model', () => {
	it('has the expected schema definition', () => {
		expect(Queries.attributes.location).to.be.an('string');
	});
	it('query must be not null', () => {
      let query = Queries.build({location: ''});
      return query.validate()
      .then(result => {
        expect(result).to.be.an.instanceOf(Error);
      });
    });
	it('query should be given a corresponding user_id', () => {
		Queries.create({location: "New york"})
		.then((query) => {
			query.setUser(1);
			expect(query.user_id).to.be.equal(1);
		});
	});
});


