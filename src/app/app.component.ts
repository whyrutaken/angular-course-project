import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-project';
  loadRecipe: boolean;
  loadShoppingList: boolean;

  onLoadRecipePage(load: boolean){
    this.loadRecipe = load;
    this.loadShoppingList = !load;
    console.log("Load Recipe");
  }

  onLoadShoppingListPage(load: boolean){
    this.loadShoppingList = load;
    this.loadRecipe = !load;
    console.log("Load ShoppingList");

  }
}
