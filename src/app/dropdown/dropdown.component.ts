import { Component, OnInit } from '@angular/core';
import { trigger, style, state, group, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style ({ opacity: 1 })),
      state('hide', style ({ opacity: 0 })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),

    // trigger('popOverState', [
    //   state('inactive', style ({ opacity: '1', height: '*' })),
    //   state('active', style ({ opacity: '0', height: '0px', overflow: 'hidden' })),

    //   transition('inactive => active', animate('500ms ease-in'),),
    //   transition('active => inactive', animate('500ms ease-out')),
    // ]),


      trigger('dropdownAnimation', [
      state('show', style ({ opacity: '1', height: '*' })),
      state('hide', style ({ opacity: '0', height: '0px', overflow: 'hidden' })),

      transition('show => hide', animate('500ms ease-in'),),
      transition('hide => show', animate('500ms ease-out')),
    ]),









  ]
})
export class DropdownComponent implements OnInit {

  // Implementation One

  // state: string;

  // constructor() { 
  //   this.toggleState();
  // }

  // toggleState() {
  //   this.state = this.state === 'active' ? 'inactive' :  'active';
  // }
  
  // Implementation two

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
