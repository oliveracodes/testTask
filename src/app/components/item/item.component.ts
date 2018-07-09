import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

import { Item } from '../../models/Item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger('fade', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('200ms ease-out', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate('300ms ease-in', style({ opacity: 0 }))
        ])
    ])
  ]
})
export class ItemComponent implements OnInit {
  @Input('item') item: Item;
  isHidden = true;

  constructor() {}

  ngOnInit() {
  }

  expand() {
    this.isHidden = false;
  }

  showLess() {
    this.isHidden = true;
  }

  toggleThumbs(item) {
    if (item.thumbsUp === undefined) {
      item.thumbsUp = true;
    } else {
      item.thumbsUp = !item.thumbsUp;
    }
  }
}
