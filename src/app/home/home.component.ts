import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [

  //   trigger('goals', [
  //     transition('* => *', [

  //       query(':enter', style({ opacity: 0 }), {optional: true}),

  //       query(':enter', stagger('300ms', [
  //         animate('.6s ease-in', keyframes([
  //           style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
  //           style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
  //           style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
  //         ]))]), {optional: true})
  //         ,
  //       query(':leave', stagger('300ms', [
  //         animate('.6s ease-out', keyframes([
  //           style({opacity: 1, transform: 'translateY(0)', offset: 0}),
  //           style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
  //           style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
  //         ]))]), {optional: true})
  //     ])
  //   ])
  // ]
})
export class HomeComponent implements OnInit {

   numCount: string = '4';

  constructor() { }

  ngOnInit() {
  }

  // clickEvent (i) {
  //   this.numCount.(i, 1);
  // }

}
