import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './layouts/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from './layouts/topnavbar/topnavbar.component';
import { LoaderComponent } from './loader/loader.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    TopnavbarComponent,
    LoaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
