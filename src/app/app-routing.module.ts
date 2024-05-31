import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmployeeComponent } from './employee/employee.component';
import {ContentComponent} from "./content/content.component";

//
// const routes: Routes = [
//   { path: '', redirectTo: 'main', pathMatch: 'full'},
//   { path: 'main', component: MainLayoutComponent }
// ];
const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainLayoutComponent, children: [
      { path: 'employees', component: EmployeeComponent },
      // { path: 'leaves', component: ContentComponent },
      // { path: 'expenses', component: ContentComponent }
    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
