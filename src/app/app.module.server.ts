// import { NgModule } from '@angular/core';
// import { ServerModule } from '@angular/platform-server';
// import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
// import { AppModule } from './app.module';
// import { AppComponent } from './app.component';
//
//
//
// @NgModule({
//   imports: [
//     AppModule,
//     ServerModule,
//     ModuleMapLoaderModule
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppServerModule {}
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
// import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    // AppModule,
    ServerModule,

  ],
  bootstrap: [AppComponent] // Add AppComponent to the bootstrap array
})
export class AppServerModule {}
