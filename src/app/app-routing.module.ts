import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { LayoutComponent } from './layouts/layout/layout.component';




const routes: Routes = [

  // site layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
    ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
