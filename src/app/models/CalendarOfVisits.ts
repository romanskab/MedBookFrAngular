import {Doctor} from './Doctor';
import {Patient} from './Patient';

export class CalendarOfVisits {
  constructor(
    public id?: number,
    public date?: string,
    public time?: string,
    public doctor?: Doctor,
    public patient?: Patient
  ) {
  }

}
