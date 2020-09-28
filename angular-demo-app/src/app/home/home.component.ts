import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
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
  comicForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.comicForm = new FormGroup({
      characterName: new FormControl(null, Validators.required),
      universe: new FormControl(null, Validators.required),
      abilities: new FormArray([
        new FormControl()
      ]),
    });
  }

  onShowFormDetails(formDetails: NgForm) {
    console.log(formDetails);
    formDetails.reset();
  }

  onAutoFill(formDetails: NgForm) {
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
  }
  onAlterValue(form: NgForm) {
    form.form.patchValue({
      user: {
        username: 'Mando',
      },
    });
  }



  onSaveHero() {
    console.log(this.comicForm);
  }

  onAddAbility() {
    (<FormArray>this.comicForm.get('abilities')).push(new FormControl());
  }

  onRemoveAbility(index: number) {
    (<FormArray>this.comicForm.get('abilities')).removeAt(index);
  }
}
