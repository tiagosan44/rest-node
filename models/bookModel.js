import mongoose from 'mongoose';

const { Schema } = mongoose;

const model = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, default: false }
  }
);

const bookModel = mongoose.model('Book', model);

export { bookModel as default };
