import { postServiceInstance } from '@/services';
import { Express } from 'express';

export default (app: Express) => {
  app.use(`/test`, postServiceInstance.isExisted);
};
