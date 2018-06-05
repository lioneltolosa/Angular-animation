import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-example-animation-01',
  templateUrl: './example-animation-01.component.html',
  styleUrls: ['./example-animation-01.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ExampleAnimation01Component implements OnInit {

  
  // Implementation One

  state: string;

  constructor() { 
    this.toggleState();
  }

  toggleState() {
    this.state = this.state === 'enter' ? 'leave' :  'enter';
  }

  ngOnInit() {
  }

}
