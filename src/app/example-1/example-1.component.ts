import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-example-1',
  templateUrl: './example-1.component.html',
  styleUrls: ['./example-1.component.scss'],
  animations: [
    trigger('myAnim', [
      state('on', style({
        backgroundColor: 'red',
        transform: 'scale(2)'
      })),
      state('off', style({
        backgroundColor: 'blue'
      })),
      transition('on <=> off', animate('0.2s 100ms ease-in'))
    ])
  ]
})
export class Example1Component implements OnInit {

  state = 'off';

  constructor() { }

  ngOnInit() {
  }
  
  toggleState() {
    this.state = this.state === 'off' ? 'on' : 'off';
  }

}
