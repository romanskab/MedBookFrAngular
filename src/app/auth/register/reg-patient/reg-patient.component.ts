import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';
import {Router} from '@angular/router';
import {PatientService} from '../../../services/patient.service';
import {Role} from '../../../models/Role';
import {UserService} from '../../../services/user.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-reg-patient',
  templateUrl: './reg-patient.component.html',
  styleUrls: ['./reg-patient.component.css']
})
export class RegPatientComponent implements OnInit {
  patient: Patient = new Patient();
  passValid;
  filePhoto: File = null;
  namePhoto;
  isError = false;
  isSuccess = false;

  constructor(private patientService: PatientService,
              private router: Router,
              private userService: UserService) {
    this.patient.phone = '+380';
  }

  ngOnInit() {
  }

  register() {
    this.isError = false;
    // спочатку зберігаємо юзера і даємо назву фото
    this.patient.role = Role.ROLE_PATIENT;
    if (this.filePhoto != null) {
      this.namePhoto = uuid();
      const format = this.filePhoto.name.split('.').pop();
      this.patient.image = this.namePhoto + '.' + format;
    }
    console.log(this.patient);
    this.patientService.save(this.patient).subscribe(value => {
      console.log(value);
      // після збереження юзера зберігаємо файл фото в target/classes/static/images
      if (this.filePhoto != null) {
        const photoFormData: FormData = new FormData();
        photoFormData.append('image', this.filePhoto, this.patient.image);
        this.userService.savePhoto(photoFormData).subscribe(value1 => {
          console.log(value1);
          this.navigateToExitWithTimeout();
        });
      } else {
        this.navigateToExitWithTimeout();
      }
    }, error1 => {
      this.isError = true;
    });
  }

  navigateToExitWithTimeout() {
    this.isSuccess = true;
    setTimeout(() => {
      this.router.navigate(['']);
    }, 2500);
  }

  photoSelection(event) {
    this.filePhoto = event.target.files[0];
  }

}
