import {Role} from './Role';
import {Gender} from './Gender';
import {User} from './User';
import DateTimeFormat = Intl.DateTimeFormat;

export class Doctor extends User {

  constructor(public id?: number,
              public name?: string,
              public surname?: string,
              public fatherName?: string,
              public speciality?: string,
              public gender?: Gender,
              public image?: string,
              public username?: string,
              public password?: string,
              public phone?: string,
              public dateOfBirth?: Date,
              public role?: Role
  ) {
    super(id, name, username, password, role, phone, image);
  }
}
