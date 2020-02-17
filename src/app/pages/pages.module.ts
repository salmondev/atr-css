import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';

import {LayoutsModule} from '../layouts/layouts.module';

import { FooterComponent } from '../layouts/footer/footer.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { SidenavComponent } from '../layouts/sidenav/sidenav.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [PagesComponent, HomeComponent, ProjectComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutsModule,
  ]
})
export class PagesModule {
}
