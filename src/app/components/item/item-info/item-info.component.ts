import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../models/Item.model';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  @Input('item') item: Item;

  constructor() { }

  ngOnInit() {
  }

}
