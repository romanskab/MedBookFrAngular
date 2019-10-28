import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Role} from '../../../models/Role';
import {Doctor} from '../../../models/Doctor';
import {DoctorService} from '../../../services/doctor.service';
import {UserService} from '../../../services/user.service';
import * as uuid from 'uuid';
import * as moment from 'moment';

@Component({
  selector: 'app-reg-doctor',
  templateUrl: './reg-doctor.component.html',
  styleUrls: ['./reg-doctor.component.css']
})
export class RegDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  passValid;
  filePhoto: File = null;
  namePhoto;
  specialities: string[];

  constructor(private doctorService: DoctorService,
              private router: Router,
              private userService: UserService) {
    this.doctor.phone = '+380';
  }

  ngOnInit() {
    this.doctorService.getSpecialities().subscribe(value => {
      this.specialities = value;
      console.log(this.specialities);
    });
  }

  register() {
    // коригування формату дати
    this.doctor.dateOfBirth = moment(this.doctor.dateOfBirth).format('YYYY-MM-DDT00:00:00.000') + 'Z';
    // спочатку зберігаємо юзера і даємо назву фото
    this.doctor.role = Role.ROLE_DOCTOR;
    if (this.filePhoto != null) {
      this.namePhoto = uuid();
      const format = this.filePhoto.name.split('.').pop();
      this.doctor.image = this.namePhoto + '.' + format;
    }
    console.log(this.doctor);
    this.doctorService.save(this.doctor).subscribe(value => {
      console.log(value);
      // після збереження юзера зберігаємо файл фото в target/classes/static/images
      if (this.filePhoto != null) {
        const photoFormData: FormData = new FormData();
        photoFormData.append('image', this.filePhoto, this.doctor.image);
        this.userService.savePhoto(photoFormData).subscribe(value1 => {
          console.log(value1);
          this.router.navigate(['']);
        });
      }
    });
  }

  photoSelection(event) {
    this.filePhoto = event.target.files[0];
  }


}
