import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Role} from '../../../models/Role';
import {Laboratory} from '../../../models/Laboratory';
import {LaboratoryService} from '../../../services/laboratory.service';
import {UserService} from '../../../services/user.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-reg-laboratory',
  templateUrl: './reg-laboratory.component.html',
  styleUrls: ['./reg-laboratory.component.css']
})
export class RegLaboratoryComponent implements OnInit {

  laboratory: Laboratory = new Laboratory();
  passValid;
  filePhoto: File = null;
  namePhoto;
  isError = false;
  isSuccess = false;

  constructor(private laboratoryService: LaboratoryService,
              private router: Router,
              private userService: UserService) {
    this.laboratory.phone = '+380';
  }

  ngOnInit() {
  }

  register() {
    this.isError = false;
    this.laboratory.role = Role.ROLE_lABORATORY;
    if (this.filePhoto != null) {
      this.namePhoto = uuid();
      const format = this.filePhoto.name.split('.').pop();
      this.laboratory.image = this.namePhoto + '.' + format;
    }
    console.log(this.laboratory);
    this.laboratoryService.save(this.laboratory).subscribe(value => {
      console.log(value);
      // після збереження юзера зберігаємо файл фото в target/classes/static/images
      if (this.filePhoto != null) {
        const photoFormData: FormData = new FormData();
        photoFormData.append('image', this.filePhoto, this.laboratory.image);
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
