export type IdType = string | number;
export type NumberIdType = number;
export type StringIdType = string;
export type AnyObject = any;

export interface IApplicationError {
  statusCode?: number;
  messageCode?: string;
  message: string;
}

export interface ITableTemplateName {
  default: string;
  withQuotationMarks: string;
  alias: string;
}

export interface IBaseResponse {
  id: number;
  createdAt: string;
  modifiedAt: string;
}

export interface IUser extends IBaseResponse {
  username: string;
  avatarLink: string;
}

export interface IPost extends IBaseResponse {
  description: string;
  hashtag: string;
  rating: number;
  assetLink: string;
  authorId: number;
}
