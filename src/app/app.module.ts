import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';

import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';

import { ProjectComponent } from './pages/project/project.component';


import { LayoutsModule } from './layouts/layouts.module';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // PagesComponent,
    // FooterComponent,
    // HeaderComponent,
    // SidenavComponent,
    LoginComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
