import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PopoverComponent } from './popover/popover.component';
import { Example2Component } from './example-2/example-2.component';
import { DropdownComponent } from './dropdown/dropdown.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
