import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-example-app',
  templateUrl: './example-app.component.html',
  styleUrls: ['./example-app.component.scss'],
  animations: [trigger( 'openClose',
    [
      state('collapsed, void', style({ height: '0px', color: 'maroon', borderColor: 'maroon' })),

      state('expanded', style({height: '*', borderColor: 'green', color: 'green'})),

      transition(
          'collapsed <=> expanded', [
            animate(500, style({height: '250px'})), 
            animate(500)
        ])
    ])]
})
export class ExampleAppComponent implements OnInit {

  stateExpression: string;

  constructor() {
    //  this.collapse();

     this.toogleOpen();
  }

  // expand() { 
  //   this.stateExpression = 'expanded'; 
  // }

  // collapse() { 
  //   this.stateExpression = 'collapsed'; 
  // }

  toogleOpen() {
    // if(this.stateExpression ==='expanded') {
    //   this.stateExpression = 'collapsed';
    // } else {
    //   this.stateExpression = 'expanded';
    // }
    this.stateExpression = this.stateExpression ==='collapsed' ? 'expanded' : 'collapsed'; 
  }

  ngOnInit() {
  }
}
