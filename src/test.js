process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';
import {apiServer } from '../dist/app.js'

const  expect = chai.expect;

chai.use(chaiHttp);

describe('Users API', () => {
  before(() => {
    const TEST_DATA = {
      1: { id: 11, username: 'user1', age: '45', hobbies: [] },
      2: { id: 12, username: 'userName2', age: '24', hobbies: ['Music', 'Volleyball']},
    }

    fs.writeFileSync(
      'data-test.json',
      JSON.stringify(TEST_DATA)
    )
  })

  it('should get all users', (done) => {
    chai
      .request(server)
      .get('/api/user')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.body).to.haveOwnProperty('data')

        done()
      })
  })

  it('should get user by id', (done) => {
    chai
      .request(server)
      .get('/api/users')
      .query({ id: 2 })
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.body).to.haveOwnProperty('data')
        expect(res.body.data.id).to.equal(2)

        done()
      })
  })

  it("shouldn't get non-existing user", (done) => {
    chai
      .request(server)
      .get('/api/users')
      .query({ id: 4 })
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(404)
        expect(res.body).to.haveOwnProperty('message')

        done()
      })
  })
})