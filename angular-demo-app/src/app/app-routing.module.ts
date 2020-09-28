import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AboutDeactivateService } from './about/about.deactivate.service';
import { AboutGaurd } from './about/about.gaurd.service';
import { ContactResolverService } from './contact/contact-resolver.service';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ContactImageComponent } from './contact/contact-image/contact-image.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AboutGaurd],
    canDeactivate: [AboutDeactivateService],
  },
  {
    path: 'contact',
    component: ContactComponent,
    resolve: { resolveTest: ContactResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
