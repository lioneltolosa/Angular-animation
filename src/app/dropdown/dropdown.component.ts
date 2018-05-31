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
    ])

  ]
})
export class DropdownComponent implements OnInit {

  
  itemCount: number;
  btnText: string = 'Add an Itemaaaaa';
  goalText: string = 'My first life goal';
  goals = [];

  constructor() { }

  ngOnInit() {
  }
}
