import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';
import { trigger,style, state, transition,animate,keyframes,query,stagger } from '@angular/animations';


// @Component({
//   selector: 'app-tabs',
//   templateUrl: './tabs.component.html',
//   styleUrls: ['./tabs.component.scss'],
//   animations: [fadeInAnimation],
//   host: { '[@fadeInAnimation]': '' }
// })

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style ({ opacity: 1 })),
      state('hide', style ({ opacity: 0 })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),

  ]
})



export class TabsComponent implements OnInit {

  
  show = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show
  }

  ngOnInit() {
  }

}
