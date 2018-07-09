import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../models/Item.model';

@Component({
  selector: 'app-item-retention',
  templateUrl: './item-retention.component.html',
  styleUrls: ['./item-retention.component.css']
})
export class ItemRetentionComponent implements OnInit {
  @Input('item') item: Item;

  constructor() { }

  ngOnInit() {
  }

}
