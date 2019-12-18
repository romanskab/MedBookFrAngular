import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // for local
  private host = 'http://localhost:8080';

  // for AWS
  // private host = 'http://ec2-3-15-164-248.us-east-2.compute.amazonaws.com:8080';

  api = this.host;

  constructor() {
  }
}
