import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective {
  constructor(private element: ElementRef) {}

  @HostBinding('style.backgroundColor') background: string = 'violet';

  @HostListener('mouseenter') mouseenter() {
    // this.element.nativeElement.style.background = 'red';
    this.background = 'red';
  }
  @HostListener('mouseleave') mouseleave() {
    // this.element.nativeElement.style.backgroundColor = 'white';
    this.background = 'white'
  }
}
