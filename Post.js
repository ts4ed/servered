import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model('Post', Post);
