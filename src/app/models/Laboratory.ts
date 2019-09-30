import {Role} from './Role';
import {User} from './User';

export class Laboratory extends User {
  constructor(public id?: number,
              public name?: string,
              public region?: string,
              public district?: string,
              public city?: string,
              public street?: string,
              public building?: string,
              public username?: string,
              public password?: string,
              public phone?: string,
              public image?: string,
              public role?: Role,
  ) {
    super(id, name, username, password, role, phone, image);
  }
}
