import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';

import {ProjectComponent} from './project/project.component';


const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
