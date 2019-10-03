import {Role} from './Role';
import {Gender} from './Gender';
import {User} from './User';
import {VisitToDoctor} from './VisitToDoctor';

export class Patient extends User {

  constructor(
    public id?: number,
    public surname?: string,
    public name?: string,
    public fatherName?: string,
    public gender?: Gender,
    public image?: string,
    public username?: string,
    public password?: string,
    public phone?: string,
    public dateOfBirth?: string,
    public role?: Role
  ) {
    super(id, name, username, password, role, phone, image);
  }


}
