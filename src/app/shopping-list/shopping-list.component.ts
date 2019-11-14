import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[new Ingredient('Egg',5), new Ingredient('Apple',10)]
  constructor() { }

  ngOnInit() {
  }

}
