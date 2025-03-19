import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingListItemDtoModel} from '../../models/shopping-list-item-dto.model';
import {ButtonEventData, ButtonEventDataType} from "../../models/button-event-data";

@Component({
  selector: 'app-s-list',
  imports: [],
  templateUrl: './s-list.component.html',
  styleUrl: './s-list.component.scss'
})
export class SListComponent {

  ButtonEventDataType = ButtonEventDataType;

  @Input({required:true})
  items!: ShoppingListItemDtoModel[];

  @Output()
  private readonly buttonEvent: EventEmitter<ButtonEventData> = new EventEmitter<ButtonEventData>();

  emitDeleteEvent(eventData: ButtonEventData): void {
    this.buttonEvent.emit(eventData);
  }

}
