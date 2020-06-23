import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './poc/users/users.component';
import { WellListComponent } from './poc2/well/well-list/well-list.component';
import { WellComponent } from './poc2/well/well/well.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellListComponent,
    WellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
