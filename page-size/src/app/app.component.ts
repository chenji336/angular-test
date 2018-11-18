import { Component } from '@angular/core';
// 如果没有使用findLast是不会把打包进入代码的
import { findLast } from 'lodash';
import { ContactService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page-size';
  constructor(
    private service: ContactService
  ) {
    findLast([1,2,3,4],1)
    service.get('xxxx');
  }
}
