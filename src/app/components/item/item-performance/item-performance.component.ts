import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../models/Item.model';

@Component({
  selector: 'app-item-performance',
  templateUrl: './item-performance.component.html',
  styleUrls: ['./item-performance.component.css']
})
export class ItemPerformanceComponent implements OnInit {
  @Input('item') item: Item;

  constructor() { }

  ngOnInit() {
  }

}
