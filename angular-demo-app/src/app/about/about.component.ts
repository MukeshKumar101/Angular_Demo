import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MyDeactivateGuard } from './about.deactivate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements MyDeactivateGuard {
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('about Ended');
    return true;
  }
  heroName: string;

  setHero(name: string) {
    this.heroName = name;
  }
}
