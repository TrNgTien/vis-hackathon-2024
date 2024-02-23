import { Endpoints } from "@/constants";
import { authServiceInstance } from "@/services";
import { Express } from "express";

export default (app: Express) => {
  app.use(`/v1/api/${Endpoints.AUTH}`, authServiceInstance);
};
