import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  onDrop(event: CdkDragDrop<string[]>){
    if(event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.children, event.previousIndex, event.currentIndex);
    }
  }

}
