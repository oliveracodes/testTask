import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/Item.model';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getItems();
  }

}
