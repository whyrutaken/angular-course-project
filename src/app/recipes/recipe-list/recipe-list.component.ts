import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Test Spaghetti", "This is a test spaghetti with a description.", "https://ih1.redbubble.net/image.5218369573.9590/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"),
    new Recipe("Test Nokedli", "I am a Nokedli description.", "https://static.streetkitchen.hu/live/uploads/2017/09/tojasos-nokedli-1-scaled.jpg")
  ];
}
