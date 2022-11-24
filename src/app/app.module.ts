import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms'
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import { Service } from './service/service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentesModule } from './componentes/componentes.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppRouterModule } from 'src/app-router.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ComponentesModule,
    PrimeNgModule,
    AppRouterModule,
    FontAwesomeModule
    
  ],
  providers: [Service,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
