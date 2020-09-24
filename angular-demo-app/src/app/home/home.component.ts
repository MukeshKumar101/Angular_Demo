import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('usergroup') user: NgModelGroup;
  @ViewChild('passgroup') pass: NgModelGroup;
  constructor() {}

  ngOnInit(): void {}

  showFormDetails(formDetails: NgForm) {

    formDetails.setValue({
      user: {
        username: 'Rex',
        email: "hilsa@yahoo.com"
      },
      passwordgroup: {
        password: 'abc',
        confirmPassword: 'abc'
      }
    })
    console.log(formDetails);
  }

  alterValue(form: NgForm) {

    form.form.patchValue({
      user: {
        username: 'Mando'
      }
    })

  }
}
