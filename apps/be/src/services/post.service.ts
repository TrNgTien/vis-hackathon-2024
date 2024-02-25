import { IPost } from '@/constants';
import { environment } from '@/helpers';
import { errorResponse } from '@/utils';
import { Request, Response } from 'express';
import { Pool } from 'pg';
const pool = new Pool({
  user: environment.get('POSTGRES_USERNAME'),
  password: environment.get('POSTGRES_PASSWORD'),
  host: environment.get('POSTGRES_HOST'),
  database: environment.get('POSTGRES_DATABASE'),
  port: +environment.get('POSTGRES_PORT'),
  connectionTimeoutMillis: 2000,
});

class PostService {
  private static instance: PostService;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new PostService();
    }
    return this.instance;
  }

  async getPosts(_: Request, res: Response) {
    try {
      pool.query('select * from "Post"', (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      });
      // return responseSuccess({ res, payload: posts });
    } catch (e) {
      errorResponse({ res, e: `[getPosts]: ${e}` });
    }
  }

  async getPostById(req: Request, res: Response) {
    const { params } = req;
    const { id } = params;

    console.log('checking id', id)
    try {
      pool.query(`select * from "Post" where id  = 3`, (error, results) => {
        if (error) {
          throw error;
        }
        return res.status(200).json(results.rows?.[0] ?? []);
      });
    } catch (e) {
      errorResponse({ res, e: `[getPostById]: ${e}` });
    }
  }
}

export const postServiceInstance = PostService.getInstance();
