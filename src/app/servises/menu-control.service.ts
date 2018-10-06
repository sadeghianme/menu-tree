import { Injectable } from '@angular/core';
import {MenuBarObj} from '../class/menu-obj';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class MenuControlService {

  constructor() { }

  initiateState(mainMenu, menuItem) {
    mainMenu.forEach(x =>  {
      if (x.id !== menuItem.id && x.children && x.children.length) {
        x.expanded = false;
        this.unexpandmenu(x);
      }
    });
    if (menuItem.children && menuItem.children.length) {
      menuItem.expanded = !menuItem.expanded;
    }
    this.selectMenu(menuItem);
  }

  selectMenu(item) {
    if (item && item.children && item.children.length) {
      item.children.forEach(x => {
        if (item.expanded) {
          console.log(x, 'show');
          $('#' + x.id).height('45px').css('opacity', '1');
        } else {
          console.log(x, 'hide');

          $('#' + x.id).height('0').css('opacity', '0');
          if (x.children && x.children.length) {
            x.expanded = false;
          }
        }
        this.selectMenu(x);
      });

    } else {
      console.log('navigate');
    }
  }

  unexpandmenu(menuItem) {
    if (menuItem && menuItem.children && menuItem.children.length) {
      menuItem.children.forEach(x => {
        $('#' + x.id).height('0').css('opacity', '0');
        if (x.children && x.children.length) {
          this.unexpandmenu(x);
          x.expanded = false;
        }
      });
    }
  }

  authorizationMenu(menu, accesses) {
    menu.forEach(x => {
      if (x.accessCondition && x.accessCondition.length) {
        this.checkItem(x, accesses);
      }
    });
    console.log(menu)
  }

  checkItem(menuItem, accesses) {
    menuItem.accessCondition.forEach(x => {
      if (x.role === '') {
        menuItem.visible = true;
        if (x.children && x.children.length) {
          this.checkItem(x, accesses);
        }
      } else if (accesses.role.findIndex(sub => sub.toUpperCase() === x.role.toUpperCase()) > -1) {
        if (x.groupId.findIndex(sub => sub.toString() === accesses.groupId.toString()) > -1) {
          menuItem.visible = true;
          if (x.children && x.children.length) {
            this.checkItem(x, accesses);
          }
        }
      }
    });
  }
}
