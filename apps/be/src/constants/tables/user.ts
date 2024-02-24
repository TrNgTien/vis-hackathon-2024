import { ITableTemplateName } from '../types';

export default class User {
  static readonly NAME = {
    default: 'User',
    withQuotationMarks: `"User"`,
    alias: 'usr',
  };

  static readonly COLUMNS = {
    id: 'id',
    createdAt: 'created_at',
    modifiedAt: 'modified_at',
    username: 'username',
    password: 'password',
    firstName: 'first_name',
    lastName: 'last_name',
    profileId: 'profile_id',
  };

  static getTableWithAlias(alias: string = this.NAME.alias) {
    return `${this.NAME.withQuotationMarks} ${alias}`;
  }

  static getColumns(customAlias: string = this.NAME.alias) {
    return {
      id: `${customAlias}.${this.COLUMNS.id}`,
      createdAt: `${customAlias}.${this.COLUMNS.createdAt}`,
      modifiedAt: `${customAlias}.${this.COLUMNS.modifiedAt}`,
      username: `${customAlias}.${this.COLUMNS.username}`,
      password: `${customAlias}.${this.COLUMNS.password}`,
      firstName: `${customAlias}.${this.COLUMNS.firstName}`,
      lastName: `${customAlias}.${this.COLUMNS.lastName}`,
      profileId: `${customAlias}.${this.COLUMNS.profileId}`,
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
