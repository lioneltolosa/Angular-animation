import { Component, OnInit } from '@angular/core';
import {group, animate, query, transition, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('bannerAnimation', [
      transition(":increment", group([
        query(':enter', [
          style({ left: '100%' }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '-100%' }))
        ])
      ])),
      
      transition(":decrement", group([
        query(':enter', [
          style({ left: '-100%' }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '100%' }))
        ])
      ]))
    ])
  ]
})
export class CollapseComponent implements OnInit {

  allBanners: string[] = ['1', '2', '3', '4'];
  selectedIndex: number = 0;
 
  get banners() {
     return [this.allBanners[this.selectedIndex]];
  }
 
  previous() {
    this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
  }
 
  next() {
    this.selectedIndex = Math.min(this.selectedIndex + 1, this.allBanners.length - 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
