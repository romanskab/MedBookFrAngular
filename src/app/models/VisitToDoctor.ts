import {Doctor} from './Doctor';
import {Patient} from './Patient';

export class VisitToDoctor {

  constructor(
    public id?: number,
    public date?: string,
    public doctor?: Doctor,
    public patient?: Patient,
    public conclusion?: string
  ) {
  }
}
