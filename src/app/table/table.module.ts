import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader } from './sortable.directive';
import { NgbdTableComplete } from './table.component';



@NgModule({
  declarations: [NgbdTableComplete, NgbdSortableHeader],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [NgbdTableComplete],
  bootstrap: [NgbdTableComplete]
})
export class TableModule { }
