import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PopoverComponent } from './popover/popover.component';
import { Example2Component } from './example-2/example-2.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeroComponent } from './hero/hero.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExampleAnimation01Component } from './example-animation-01/example-animation-01.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'popover',
    component: PopoverComponent
  },
  {
    path: 'slider',
    component: Example2Component
  },
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'exapleAnimation',
    component: ExampleAnimation01Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    NgbModule
  ]
})
export class AppRoutingModule { }
