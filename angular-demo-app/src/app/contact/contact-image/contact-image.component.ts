import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-image',
  templateUrl: './contact-image.component.html',
  styleUrls: ['./contact-image.component.css'],
})
export class ContactImageComponent implements OnInit {
  @Input() username: string;
  @Output() cacheEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onLoadCache() {
    const cache = '#######THIS IS THE CACHE COLLECTED####################';
    this.cacheEmitter.emit(cache);
  }
}
