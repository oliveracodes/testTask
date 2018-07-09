import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../models/Item.model';

@Component({
  selector: 'app-item-score',
  templateUrl: './item-score.component.html',
  styleUrls: ['./item-score.component.css']
})
export class ItemScoreComponent implements OnInit {
  @Input('item') item: Item;

  constructor() { }

  ngOnInit() {
  }

}
