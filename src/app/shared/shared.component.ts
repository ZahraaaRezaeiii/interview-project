import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent{

  @Input()
  compNumber!: number;

  @Input() 
  num!: number;
  
  children: any[] = [];

  addChild() {
    this.children.push({});
  }

  onDrop(event: CdkDragDrop<string[]>){
    debugger;
    if(event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.children, event.previousIndex, event.currentIndex);
    }
  }

}
