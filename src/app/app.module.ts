import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './poc/users/users.component';
import { WellListComponent } from './poc2/well/well-list/well-list.component';
import { WellComponent } from './poc2/well/well/well.component';
import { LeftComponent } from './poc3/left/left.component';
import { RightComponent } from './poc3/right/right.component';
import { Poc3Component } from './poc3/poc3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellListComponent,
    WellComponent,
    Poc3Component,
    LeftComponent,
    RightComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
