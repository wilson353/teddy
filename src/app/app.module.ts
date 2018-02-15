import { BrowserModule }                  from '@angular/platform-browser';
import { ModuleWithProviders, NgModule }  from '@angular/core';
import { RouterModule, Routes }           from '@angular/router';


import { AppComponent }     from './app.component';
import { StorageComponent } from './storage/storage.component';
import {
  HeaderComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'Storage',
    component: StorageComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
