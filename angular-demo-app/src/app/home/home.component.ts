import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  NgModelGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('usergroup') user: NgModelGroup;
  @ViewChild('passgroup') pass: NgModelGroup;
  isValid: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showFormDetails(formDetails: NgForm) {
    formDetails.setValue({
      user: {
        username: 'Rex',
        email: 'hilsa@yahoo.com',
      },
      passwordgroup: {
        password: 'abc',
        confirmPassword: 'abc',
      },
    });
    console.log(formDetails);
  }

  alterValue(form: NgForm) {
    form.form.patchValue({
      user: {
        username: 'Mando',
      },
    });
  }

  comicForm = new FormGroup({
    characterName: new FormControl(null, Validators.required),
    universe: new FormControl(null, Validators.required),
    ability: new FormControl(null, Validators.required),
  });

  saveHero() {
    console.log(this.comicForm);
  }
}
