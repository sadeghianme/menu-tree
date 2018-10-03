import { Injectable } from '@angular/core';
import {MenuBarObj} from '../class/menu-obj';

@Injectable({
  providedIn: 'root'
})
export class MenuControlService {

  constructor() { }

  selectMenu(item) {
    // TODO unselect last menu & expand if item has children or navigate to item's link
  }
}
