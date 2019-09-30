export class VisitToDoctor {

  constructor(
    public id?: number,
    public date?: string,
    public doctorId?: number,
    public patientId?: number,
    public conclusion?: string
  ) {
  }
}
