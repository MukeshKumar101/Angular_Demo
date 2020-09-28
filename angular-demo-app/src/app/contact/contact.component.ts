import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  username: string = '';
  cacheData: string;

  ngOnInit(): void {}

  changeName(name: string) {
    this.username = name;
  }

  onSetCache(data: string) {
    this.cacheData = data;
  }
}
