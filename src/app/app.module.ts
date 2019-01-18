import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowdatePipe } from './showdate.pipe';
import { HighlightDirective } from './highlight.directive';
import { DisplayuserprojectsComponent } from './displayuserprojects/displayuserprojects.component';
import { GetComponent } from './get/get.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowdatePipe,
    HighlightDirective,
    DisplayuserprojectsComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
