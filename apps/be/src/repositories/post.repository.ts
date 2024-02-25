import { BaseRepository } from '@/base';
import { errorResponse, queryBuilder } from '@/utils';
import { Response } from 'express';

class PostRepository extends BaseRepository {
  private static instance: PostRepository;

  constructor() {
    super({ table: 'Post' });
  }

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new PostRepository();
    }
    return this.instance;
  }

  async getPostById(opts: { id: number; res: Response }) {
    const { id, res } = opts;
    try {
      const q = queryBuilder().from('Post').where('id = ?', id).toString();

      console.log('getPostById', q);

      return await this.execute(q);
    } catch (e) {
      errorResponse({ res, e: `[getPosts]: ${e}` });
    }
  }
}

export const postRepositoryInstance = PostRepository.getInstance();
