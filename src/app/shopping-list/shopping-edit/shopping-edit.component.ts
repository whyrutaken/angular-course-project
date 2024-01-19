import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild("nameInput", {static: true}) nameInput: ElementRef;
  @ViewChild("amountInput", {static: true}) amountInput: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();

  onAdd(){
    this.addIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    console.log("add");
  }

  onDelete(){
    console.log("Delete");

  }

  onClear(){
    console.log("Clear");

  }

}
