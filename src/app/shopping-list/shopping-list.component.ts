import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Pasta", 100),
    new Ingredient("Tomatoes", 10)
  ];

  onAddIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    console.log(ingredient);
  }

}
