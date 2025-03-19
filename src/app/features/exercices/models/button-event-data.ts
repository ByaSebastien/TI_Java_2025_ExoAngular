import {ShoppingListItemDtoModel} from './shopping-list-item-dto.model';

export interface ButtonEventData {
  item: ShoppingListItemDtoModel;
  dataType: ButtonEventDataType;
}

export enum ButtonEventDataType {
  MINUS,
  PLUS,
  DELETE
}
