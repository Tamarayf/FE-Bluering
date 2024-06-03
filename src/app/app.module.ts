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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideBarComponent,
    ContentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
