import { AnyObject } from '@/constants';

export interface IRepositoryProps {
  page?: number;
  limit?: number;
  fields: string[];
  where?: AnyObject;
}

export interface IBaseRepository {
  find(opts: IRepositoryProps): void;
  findOne(opts: IRepositoryProps): void;
  create(): void;
  createAll(e: any): void;
  updateById(id: number, data: any): Promise<void>;
}

