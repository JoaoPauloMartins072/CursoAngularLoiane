import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.module';
import { CursosService } from './cursos/cursos.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,



  ],

  imports: [
    BrowserModule,
    FormsModule,
    CursosModule,
    AppRoutingModule,

  ],

  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
