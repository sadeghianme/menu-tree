import {Component, Input, OnInit} from '@angular/core';
import {MenuBarObj} from '../class/menu-obj';
import {MenuControlService} from '../servises/menu-control.service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  accesses = {
    role: ['admin'],
    groupId: '1'
  };

  @Input() menuObj = MenuBarObj.menu;
 @Input() color = {childElement: '#ffc829', mainElement: '#1b2033'};
 @Input() menuWidth = '250px';
 @Input() subMenuMargin = 15;

  constructor(
    private menuControl: MenuControlService
  ) { }

  ngOnInit() {
    this.menuControl.authorizationMenu(this.menuObj, this.accesses);
  }

  showMenu(menuItem) {
    console.log('menuItem', menuItem);
    this.menuControl.initiateState(this.menuObj, menuItem);
  }

}
