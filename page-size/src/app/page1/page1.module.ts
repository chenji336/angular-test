import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { Page1RoutingModule } from './page1-routing.module';
import { ContactService } from '../app.service';

@NgModule({
  imports: [
    CommonModule,
    Page1RoutingModule
  ],
  declarations: [Page1Component],
  providers: [
    // ContactService // 这里就算引入了contactService，主要的代码还是在main.xx.js中，这里只是多了一个指向而已，所以大规模引入没啥问题
  ]
})
export class Page1Module { }
