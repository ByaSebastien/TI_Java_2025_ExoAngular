import {Component} from '@angular/core';
import {ShoppingListItemDtoModel} from '../../models/shopping-list-item-dto.model';
import {SListComponent} from '../../components/s-list/s-list.component';
import {FormsModule} from '@angular/forms';
import {ButtonEventData, ButtonEventDataType} from '../../models/button-event-data';

@Component({
  selector: 'app-shopping-list',
  imports: [
    SListComponent,
    FormsModule
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  items: ShoppingListItemDtoModel[] = [];
  itemName: string = '';
  itemQuantity: number = 1;

  addItem() {
    if (this.itemName.trim() === '') {
      return;
    }
    if (this.itemQuantity <= 0) {
      return;
    }
    let existingItem = this.items.find(i => i.name === this.itemName.toLowerCase());
    if (existingItem) {
      existingItem.quantity += this.itemQuantity;
    } else {
      this.items.push({name: this.itemName.toLowerCase(), quantity: this.itemQuantity});
    }
    this.itemName = '';
    this.itemQuantity = 1;
  }

  reactToButtonEvent(eventData: ButtonEventData) {
    let item = this.items.find(i => i.name === eventData.item.name);
    if (!item) {
      return;
    }
    switch (eventData.dataType) {
      case ButtonEventDataType.DELETE:
        this.items.splice(this.items.indexOf(item), 1);
        break;
      case ButtonEventDataType.PLUS:
        item.quantity += 1;
        break;
      case ButtonEventDataType.MINUS:
        item.quantity -= 1;
        if (item.quantity <= 0) {
          this.items.splice(this.items.indexOf(item), 1);
        }
        break;
    }
  }
}
