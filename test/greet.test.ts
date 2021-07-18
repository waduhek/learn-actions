import request from 'supertest';
import { expect } from 'chai';

import server from '../src/index';

describe('Greeting', () => {
  after((done) => {
    server.close(done);
  });

  it('Should return "Hello, World!"', (done) => {
    request(server)
      .get('/')
      .expect('Hello, World!', done);
  });

  it('Should return "Hello, User!"', (done) => {
    request(server)
      .get('/')
      .query({ name: 'User' })
      .expect(200, (error, response) => {
        if (error) {
          done(error);
          return;
        }

        const { text } = response;

        expect(text).to.equal('Hello, User!');
        done();
      });
  });

  it('Should return "Hello, World!"', (done) => {
    request(server)
      .get('/')
      .query({ name: '' })
      .expect(200, (error, response) => {
        if (error) {
          done(error);
          return;
        }

        const { text } = response;

        expect(text).to.equal('Hello, World!');
        done();
      });
  });

  it('Should return "Hello, 123!"', (done) => {
    request(server)
      .get('/')
      .query({ name: '123' })
      .expect(200, (error, response) => {
        if (error) {
          done(error);
          return;
        }

        const { text } = response;

        expect(text).to.equal('Hello, 123!');
        done();
      });
  });

  it('Should return "Hello, @%^#"', (done) => {
    request(server)
      .get('/')
      .query({ name: '@%^#' })
      .expect(200, (error, response) => {
        if (error) {
          done(error);
          return;
        }

        const { text } = response;

        expect(text).to.equal('Hello, @%^#!');
        done();
      });
  });
});
