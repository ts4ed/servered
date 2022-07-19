import Post from './Post.js';
import fileService from './fileService.js';

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }
  // запрашиваем все поствы с базы данных (например все товары)
  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  //запрос на один пост по id
  async getOn(id) {
    if (!id) {
      throw new Error('не указан id');
    }
    const post = await Post.findById(id);
    return post;
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //обновляем пост
  async update(post) {
    if (!post._id) {
      throw new Error('не указан id');
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  //удаляем пост
  async delete(id) {
    if (!id) {
      throw new Error('не указан id');
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
