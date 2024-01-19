import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
})
export class HeaderComponent{
    @Output() loadRecipePage = new EventEmitter<boolean>();
    @Output() loadShoppingListPage = new EventEmitter<boolean>();

    onClickRecipe() {
        this.loadRecipePage.emit(true);
    }

    onClickShoppingList() {
        this.loadShoppingListPage.emit(true);
    }

}