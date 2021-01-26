import should from 'should';
import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../app.js';

process.env.ENV = 'Test';

const Book = mongoose.model('Book');
const agent = supertest.agent(app);

describe('Book crud test', () => {
  it('should allow a book to be posted and return read and _it', (done) => {
    const bookPost = { title: 'My book', author: 'Jon', genre: 'Fiction' };

    agent.post('/api/books')
      .send(bookPost)
      .expect(200)
      .end((err, results) => {
        results.body.read.should.equal(false);
        results.body.should.have.property('_id');
        done();
      });
  });

  afterEach((done) => {
    Book.deleteMany({}).exec();
    done();
  });

  after((done) => {
    mongoose.connection.close();
    app.server.close(done());
  });
});
