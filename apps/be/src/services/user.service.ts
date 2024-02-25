import { IUser } from '@/constants';
import { errorResponse, responseSuccess } from '@/utils';
import { Request, Response } from 'express';

class UserService {
  private static instance: UserService;

  //------------------------------------------------
  static getInstance() {
    if (!this.instance) {
      this.instance = new UserService();
    }
    return this.instance;
  }

  getUsers(_: Request, res: Response) {
    try {
      const users: Array<IUser> = [
        {
          id: 1,
          createdAt: '2023-12-28 03:41:24.693000 +00:00',
          modifiedAt: '2023-12-28 03:41:24.693000 +00:00',
          username: 'Tien Tran',
          avatarLink:
            'https://i.pinimg.com/564x/9e/33/da/9e33dadc770d4c6bad58f71c0134bdef.jpg',
        },
        {
          id: 2,
          createdAt: '2023-12-28 03:41:24.693000 +00:00',
          modifiedAt: '2023-12-28 03:41:24.693000 +00:00',
          username: 'Tien Tran',
          avatarLink:
            'https://i.pinimg.com/564x/9e/33/da/9e33dadc770d4c6bad58f71c0134bdef.jpg',
        },
        {
          id: 3,
          createdAt: '2023-12-28 03:41:24.693000 +00:00',
          modifiedAt: '2023-12-28 03:41:24.693000 +00:00',
          username: 'Tien Tran',
          avatarLink:
            'https://i.pinimg.com/564x/9e/33/da/9e33dadc770d4c6bad58f71c0134bdef.jpg',
        },
      ];

      return responseSuccess({ res, payload: users });
    } catch (e) {
      errorResponse({ res, e: `[getUsers]: ${e}` });
    }
  }

  getUserById(_req: Request, res: Response) {
    try {
      const user: IUser = {
        id: 1,
        createdAt: '2023-12-28 03:41:24.693000 +00:00',
        modifiedAt: '2023-12-28 03:41:24.693000 +00:00',
        username: 'Tien Tran',
        avatarLink:
          'https://i.pinimg.com/564x/9e/33/da/9e33dadc770d4c6bad58f71c0134bdef.jpg',
      };

      return responseSuccess({ res, payload: user });
    } catch (e) {
      errorResponse({ res, e: `[getUserById]: ${e}` });
    }
  }
}

export const userServiceInstance = UserService.getInstance();
