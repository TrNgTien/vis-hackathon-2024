import { userServiceInstance } from '@/services';
import { Express } from 'express';

export default (app: Express) => {
  app.use(`/test`, userServiceInstance.isExisted);
};
