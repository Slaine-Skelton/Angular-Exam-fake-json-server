import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarlistComponent } from './carlist/carlist.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarlistComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
