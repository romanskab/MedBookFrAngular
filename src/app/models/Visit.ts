import {Doctor} from './Doctor';
import {Patient} from './Patient';

export class Visit {
  constructor(
    public id?: number,
    public date?: Date,
    public time?: string,
    public doctor?: Doctor,
    public patient?: Patient,
    public conclusion?: string
  ) {
  }

}
