import { Injectable } from '@angular/core';

import { Item } from '../models/Item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: Item[] = [
    new Item (
      'Christina Howell',
      'Sales Representative',
      '+672234154562',
      'chowell@smith.com',
      0,
      0,
      0,
      true
    ),
    new Item (
      'John Smith',
      'Sales Representative',
      '+972543154503',
      'john@smith.com',
      5,
      0,
      0,
      false
    ),
    new Item (
      'Jane Williams',
      'Frontend Developer',
      '+978523456503',
      'jwilliams@mail.com',
      5,
      5,
      5
    ),
    new Item (
      'Drake Doe',
      'Sales Managment',
      '+972453324523',
      'drakedoe@mail.com',
      0,
      2,
      3
    ),
    new Item (
      'Samantha Smith',
      'Marketing Executive',
      '+924543457803',
      'ssmith@mail.com',
      5,
      0,
      0,
      true
    ),
    new Item (
      'James Cruz',
      'Sales Representative',
      '+972345154803',
      'jamesc@mail.com',
      5,
      0,
      0,
      true
    ),
    new Item (
      'Anna Stevenson',
      'Web Developer',
      '+972523456903',
      'anna_s@mail.com',
      5,
      3,
      4
    ),
    new Item (
      'Oliver Michelson',
      'Sales Representative',
      '+932443153253',
      'm_oliver@mail.com',
      4,
      3,
      4,
      true
    ),
    new Item (
      'Jeff Haynes',
      'Head of Marketing',
      '+972235156783',
      'jeffhaynes@mail.com',
      5,
      4,
      5
    ),
    new Item (
      'John Traversy',
      'Web Developer',
      '+923454323501',
      'johnt@mail.com',
      5,
      2,
      4
    ),
    new Item (
      'Colton Johnson',
      'Sales Representative',
      '+972523489511',
      'coltonj@mail.com',
      0,
      3,
      0,
      false
    ),
    new Item (
      'John Smith',
      'Sales Representative',
      '+972543154503',
      'john@smith.com',
      5,
      0,
      0,
      true
    ),
    new Item (
      'Jane Williams',
      'Frontend Developer',
      '+978523456503',
      'jwilliams@mail.com',
      5,
      5,
      5
    ),
    new Item (
      'Drake Doe',
      'Sales Managment',
      '+972453324523',
      'drakedoe@mail.com',
      5,
      2,
      3,
      false
    ),
    new Item (
      'Samantha Smith',
      'Marketing Executive',
      '+924543457803',
      'ssmith@mail.com',
      3,
      0,
      4,
      true
    ),
    new Item (
      'James Cruz',
      'Sales Representative',
      '+972345154803',
      'jamesc@mail.com',
      0,
      2,
      4
    ),
    new Item (
      'Anna Stevenson',
      'Web Developer',
      '+972523456903',
      'anna_s@mail.com',
      5,
      3,
      4
    ),
    new Item (
      'Oliver Michelson',
      'Sales Representative',
      '+932443153253',
      'm_oliver@mail.com',
      5,
      3,
      4
    ),
    new Item (
      'Jeff Haynes',
      'Head of Marketing',
      '+972235156783',
      'jeffhaynes@mail.com',
      4,
      4,
      5,
      true
    ),
    new Item (
      'John Traversy',
      'Web Developer',
      '+923454323501',
      'johnt@mail.com',
      3,
      2,
      4,
      false
    ),
    new Item (
      'Colton Johnson',
      'Sales Representative',
      '+972523489511',
      'coltonj@mail.com',
      0,
      3,
      0
    )
  ];

  constructor() {}

  getItems() {
    return this.items.slice();
  }
}
