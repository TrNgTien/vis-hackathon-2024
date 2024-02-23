import { Endpoints } from '@/constants';
import { Express } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import postRoute from './post.route';

export default (app: Express) => {
  app.use(`/v1/api/${Endpoints.AUTH}`, authRoute);
  app.use(`/v1/api/${Endpoints.USER}`, userRoute);
  app.use(`/v1/api/${Endpoints.POST}`, postRoute);
};
