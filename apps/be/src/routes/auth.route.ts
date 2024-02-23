import { authServiceInstance } from '@/services';
import { Express } from 'express';

export default (app: Express) => {
  app.use(`/sign-in`, authServiceInstance.signIn);
  app.use(`/sign-up`, authServiceInstance.signUp);
};
