import { IApplicationError } from '@/constants';
import { Response } from 'express';

class ApplicationError extends Error {
  statusCode: number;
  messageCode?: string;

  constructor(opts: IApplicationError) {
    const { message, messageCode, statusCode = 400 } = opts;
    super(message);

    this.statusCode = statusCode;
    this.messageCode = messageCode;
  }
}

export const getError = (opts: { statusCode?: number; messageCode?: string; message: string }) => {
  const error = new ApplicationError(opts);
  return error;
};

export const errorResponse = (res: Response, e: any) => {
  res.status(e.statusCode).json({ message: e.message });
};

export const responseSuccess = (res: Response, payload: any) => {
  res.status(200).json(payload);
};
