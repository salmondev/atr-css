import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { LayoutComponent } from './layouts/layout/layout.component';

import { AuthGuard } from './_helpers';



const routes: Routes = [

  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard],
     children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  /*{
    path: 'login',
    component: LoginComponent
  },*/

  // site layout
  /*{
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },*
  /*{
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
    ]
  },*/

  // no layout routes
  /*{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },*/

  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
