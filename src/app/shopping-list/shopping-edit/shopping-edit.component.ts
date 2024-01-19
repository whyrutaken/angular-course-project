import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild("nameInput", {static: true}) nameInputRef: ElementRef;
  @ViewChild("amountInput", {static: true}) amountInputRef: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();

  onAdd(){
    this.addIngredient.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value, 
        this.amountInputRef.nativeElement.value));
    console.log("add");
  }

  onDelete(){
    console.log("Delete");

  }

  onClear(){
    console.log("Clear");

  }

}
