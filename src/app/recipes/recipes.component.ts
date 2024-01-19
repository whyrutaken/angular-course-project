import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  loadedRecipe: Recipe;
  
  getRecipeDetail(recipe: Recipe){
    this.loadedRecipe = recipe;
    console.log(this.loadedRecipe);
  }
}
