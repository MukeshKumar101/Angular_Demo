import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  myName: string = '';
  constructor() {}

  ngOnInit(): void {}

  changeName(name: string) {
    this.myName = name;
    console.log(name);
  }
}
