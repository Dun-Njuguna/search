import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowdatePipe } from './showdate.pipe';
import { HighlightDirective } from './highlight.directive';
import { GetComponent } from './get/get.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowdatePipe,
    HighlightDirective,
    GetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
