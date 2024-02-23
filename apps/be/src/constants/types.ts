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
