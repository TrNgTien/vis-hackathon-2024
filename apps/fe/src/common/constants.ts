export const MAX_WIDTH = 1200;

export enum ELocales {
  VI = 'vi',
  EN = 'en',
}

export class RestPaths {
  static readonly BASE_URL = 'http://localhost:8080/v1/api';
  static readonly POST = `${this.BASE_URL}/posts`;
}

export enum DATE_TIME {
  FULL_YEAR_FORMAT = 'YYYY-MM-DD',
  TIME_FORMAT = 'HH:mm:ss',
}

export const FontSizePages = {
  VERY_SMALL: 16,
  SMALL: 18,
  NORMAL: 20,
  LARGE: 22,
  VERY_LARGE: 24,
};
