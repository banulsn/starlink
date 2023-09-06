import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

 

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { StarlinkComponent } from 'src/starlink/starlink.component';

 

@NgModule({

  declarations: [

    AppComponent,

    StarlinkComponent

  ],

  imports: [

    BrowserModule,

    FormsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

 