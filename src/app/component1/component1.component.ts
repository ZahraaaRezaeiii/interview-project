import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

  constructor() {}

  children: any[] = [];

  addChild() {
    this.children.push({});
  }

}
