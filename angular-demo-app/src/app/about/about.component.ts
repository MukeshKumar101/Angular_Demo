import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  heroName: string;

  setHero(name: string) {
    this.heroName = name;
  }
}
