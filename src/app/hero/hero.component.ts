import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({ backgroundColor: '#eee', transform: 'scale(1)'})),
      state('active',   style({ backgroundColor: '#cfd8dc',transform: 'scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])

      // trigger('flyInOut', [
      //   state('in', style({transform: 'translateX(0)'})),
      //   transition('void => *', [
      //     style({transform: 'translateX(-100%)'}),
      //     animate(100)
      //   ]),
      //   transition('* => void', [
      //     animate(100, style({transform: 'translateX(100%)'}))
      //   ])
      // ])
    ]
})
export class HeroComponent implements OnInit {

  state: string;
  
  constructor() {
    this.toggleState();
   }


  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  ngOnInit() {
  }

}
