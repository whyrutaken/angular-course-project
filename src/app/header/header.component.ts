import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
})
export class HeaderComponent{
    @Output() loadPage = new EventEmitter<string>();

    onSelect(page: string) {
        this.loadPage.emit(page);
    }

}