import mongoose from 'mongoose';

const Order = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  cart: [
    {
      title: { type: String, required: true },
      price: { type: String, required: true },
      count: { type: String, required: true },
      picture: { type: String, required: true },
    },
  ],
});

export default mongoose.model('Order', Order);
