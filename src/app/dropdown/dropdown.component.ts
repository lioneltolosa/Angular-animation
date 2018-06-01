import { Component, OnInit } from '@angular/core';
import { trigger, style, state, group, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('goals', [
        transition("void => *", [
            style({ opacity: 0 }),
            animate(5000)
        ])
    ]),
    trigger('popOverState', [
      state('inactive', style ({ opacity: '1', height: '*' })),
      state('active', style ({ opacity: '0', height: '0px', overflow: 'hidden' })),
      transition('inactive => active', animate('500ms ease-in'),),
      transition('active => inactive', animate('500ms ease-out')),
    ])

  ]
})
export class DropdownComponent implements OnInit {

  
  itemCount: number;
  btnText: string = 'Add an Itemaaaaa';
  goalText: string = 'My first life goal';
  goals = [];

  state: string;

  constructor() { 
    this.toggleState();
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' :  'active';
  }

  ngOnInit() {
  }
}
