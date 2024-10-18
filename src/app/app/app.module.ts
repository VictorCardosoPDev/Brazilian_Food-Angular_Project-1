import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { NgStarRatingModule } from '@alwaan/ng-star-rating';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HeaderComponent,
  ],
  providers:[],
  bootstrap: [AppModule]
})
export class AppModule { }
