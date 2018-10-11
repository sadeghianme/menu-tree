import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    MenuBarComponent,
    ListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
