import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellListComponent } from './poc2/well/well-list/well-list.component';
import { UsersComponent } from './poc/users/users.component';
import { Poc3Component } from './poc3/poc3.component';
import { WellComponent } from './poc2/well/well/well.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'well-list', component: WellListComponent },
  { path: 'well', component: WellComponent },
  { path: 'dragNDrop', component: Poc3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
