import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleChildComponent } from '../state/example.actions';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

  showSecondComponent: boolean = false;
  secondComponentList: string[] = [];

  constructor(private store: Store) {}

  incrementCounter() {
    this.store.dispatch(increment({}));
    this.showSecondComponent = this.secondComponentList.length > 0;
  }

}
