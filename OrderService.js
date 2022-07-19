import fileService from './fileService.js';
import Order from './Order.js';

class OrderService {
  async create(order) {
    const createdOrder = await Order.create(order);
    return createdOrder;
  }
  async getAll() {
    const orders = await Order.find();
    return orders;
  }
}

export default new OrderService();
