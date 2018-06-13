import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './data.service'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AnimationsListComponent } from './animations-list/animations-list.component';
import { CollapseComponent } from './collapse/collapse.component';
import { Example2Component } from './example-2/example-2.component';
import { HeroComponent } from './hero/hero.component';
import { PopoverComponent } from './popover/popover.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExampleAnimation01Component } from './example-animation-01/example-animation-01.component';
import { Example1Component } from './example-1/example-1.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AnimationsListComponent,
    CollapseComponent,
    Example2Component,
    HeroComponent,
    PopoverComponent,
    DropdownComponent,
    TabsComponent,
    ExampleAnimation01Component,
    Example1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
