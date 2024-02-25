import { ITableTemplateName } from '../types';

export default class User {
  static readonly NAME = {
    default: 'Post',
    withQuotationMarks: `"Post"`,
    alias: 'p',
  };

  static readonly COLUMNS = {
    id: 'id',
    createdAt: 'created_at',
    modifiedAt: 'modified_at',
    description: 'description',
    hashtag: 'hashtag',
    rating: 'rating',
    assetLink: 'asset_link',
    authorId: 'author_id',
  };

  static getTableWithAlias(alias: string = this.NAME.alias) {
    return `${this.NAME.withQuotationMarks} ${alias}`;
  }

  static getColumns(customAlias: string = this.NAME.alias) {
    return {
      id: `${customAlias}.${this.COLUMNS.id}`,
      createdAt: `${customAlias}.${this.COLUMNS.createdAt}`,
      modifiedAt: `${customAlias}.${this.COLUMNS.modifiedAt}`,
      description: `${customAlias}.${this.COLUMNS.description}`,
      hashtag: `${customAlias}.${this.COLUMNS.hashtag}`,
      rating: `${customAlias}.${this.COLUMNS.rating}`,
      assetLink: `${customAlias}.${this.COLUMNS.assetLink}`,
      authorId: `${customAlias}.${this.COLUMNS.authorId}`,
    };
  }

  static useTableAlias(
    alias?: string,
  ): [
    ReturnType<typeof this.getTableWithAlias>,
    ReturnType<typeof this.getColumns>,
  ] {
    return [this.getTableWithAlias(alias), this.getColumns(alias)];
  }

  static useTableWithName(): [
    ITableTemplateName,
    ReturnType<typeof this.getColumns>,
  ] {
    return [this.NAME, this.getColumns()];
  }
}
