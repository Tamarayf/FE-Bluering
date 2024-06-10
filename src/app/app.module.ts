// import { NgModule } from '@angular/core';
//
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
//
//
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MainLayoutComponent } from './main-layout/main-layout.component';
// import { SideBarComponent } from './side-bar/side-bar.component';
// import { ContentComponent } from './content/content.component';
// import { EmployeeComponent } from './employee/employee.component';
//
//
//
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     MainLayoutComponent,
//     SideBarComponent,
//     ContentComponent,
//     EmployeeComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//
//
//   ],
//   // providers: [
//   //   provideClientHydration()
//   // ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
// }
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MainLayoutComponent } from './main-layout/main-layout.component';
// import { SideBarComponent } from './side-bar/side-bar.component';
// import { ContentComponent } from './content/content.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     MainLayoutComponent,
//     SideBarComponent,
//     ContentComponent,
//     EmployeeComponent,
//     AddEmployeeModalComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//     NgbModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeModalComponent } from './add-employee-modal/add-employee-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideBarComponent,
    ContentComponent,
    EmployeeComponent,
    AddEmployeeModalComponent,
    DeleteConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // <-- Add FormsModule here
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
