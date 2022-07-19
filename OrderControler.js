import Order from './Order.js';
import OrderService from './OrderService.js';

class OrderControler {
  async create(req, res) {
    try {
      const order = await OrderService.create(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      const orders = await OrderService.getAll();
      return res.json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export default new OrderControler();
