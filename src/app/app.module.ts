import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';


import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LayoutComponent } from './layouts/layout/layout.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdTableComplete } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    NgbdTableComplete
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
