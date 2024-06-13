import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmployeeComponent } from './employee/employee.component'; // Adjust the path as per your project structure

import {ContentComponent} from "./content/content.component";
import {AddEmployeeModalComponent} from "./add-employee-modal/add-employee-modal.component";
import {LeavesComponent} from "./leaves/leaves.component";

//
// const routes: Routes = [
//   { path: '', redirectTo: 'main', pathMatch: 'full'},
//   { path: 'main', component: MainLayoutComponent }
// ];
const routes: Routes = [


  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainLayoutComponent, children: [
      { path: 'employees', component: EmployeeComponent },
      { path: 'api/employees', component: EmployeeComponent },
      { path: 'leaves', component: LeavesComponent  },

      // { path: 'edit-employee/:id', component: EditEmployeeComponent }
      // { path: 'leaves', component: ContentComponent },
      // { path: 'expenses', component: ContentComponent }
    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
