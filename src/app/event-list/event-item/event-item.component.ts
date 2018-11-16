import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {
  @Input() event: string;
  @Input() active_index: number;
  @Output() setActiveToDoList: EventEmitter<any> = new EventEmitter();
  toDoItems: Array<string> = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.active_index === 0){
      this.setActiveToDoList.emit(this.toDoItems);
    }
  }

}
