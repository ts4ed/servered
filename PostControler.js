import Post from './Post.js';
import PostService from './PostService.js';

class PostControler {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // запрашиваем все поствы с базы данных (например все товары)
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //запрос на один пост по id
  async getOn(req, res) {
    const post = await PostService.getOn(req.params.id);
    return res.json(post);
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //обновляем пост
  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  //удаляем пост
  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostControler();
