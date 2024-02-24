import { IRouter, RequestParamHandler, RouterOptions } from 'express';

export class BaseRouter implements IRouter {
  constructor(opts?: RouterOptions) {}

  param(name: string, handler: RequestParamHandler): this {
    return this;
  }

  // all: IRouterMatcher<this, 'all'>;
  // get: IRouterMatcher<this, 'get'>;
  // post: IRouterMatcher<this, 'post'>;
  // put: IRouterMatcher<this, 'put'>;
  // delete: IRouterMatcher<this, 'delete'>;
  // patch: IRouterMatcher<this, 'patch'>;
  // options: IRouterMatcher<this, 'options'>;
  // head: IRouterMatcher<this, 'head'>;
  //
  // checkout: IRouterMatcher<this>;
  // connect: IRouterMatcher<this>;
  // copy: IRouterMatcher<this>;
  // lock: IRouterMatcher<this>;
  // merge: IRouterMatcher<this>;
  // mkactivity: IRouterMatcher<this>;
  // mkcol: IRouterMatcher<this>;
  // move: IRouterMatcher<this>;
  // 'm-search': IRouterMatcher<this>;
  // notify: IRouterMatcher<this>;
  // propfind: IRouterMatcher<this>;
  // proppatch: IRouterMatcher<this>;
  // purge: IRouterMatcher<this>;
  // report: IRouterMatcher<this>;
  // search: IRouterMatcher<this>;
  // subscribe: IRouterMatcher<this>;
  // trace: IRouterMatcher<this>;
  // unlock: IRouterMatcher<this>;
  // unsubscribe: IRouterMatcher<this>;
  // link: IRouterMatcher<this>;
  // unlink: IRouterMatcher<this>;
  //
  // use: IRouterHandler<this> & IRouterMatcher<this>;
  //
  // route<T extends string>(prefix: T): IRoute<T>;
  // route(prefix: PathParams): IRoute;
  // /**
  //  * Stack of configured routes
  //  */
  // stack: any[];
}
