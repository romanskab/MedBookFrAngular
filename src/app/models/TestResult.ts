import {Test} from './Test';
import {Patient} from './Patient';
import {User} from './User';

export class TestResult {

  constructor(
    public id?: number,
    public test?: Test,
    public date?: Date,
    public result?: number,
    public patient?: Patient,
    public meter?: User
  ) {
  }
}
