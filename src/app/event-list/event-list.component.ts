import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Array<string> = [
    "Bride & Groom Making",
    "Sangeeth",
    "Mehendi",
    "Pre-Wed",
    "Wedding"
  ];

  event_name: string;
  active_toDo_list: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onEventAdd(){
    this.event_name && this.events.push( this.event_name );
    this.event_name = "";
  }

  setToDoList(list){
    this.active_toDo_list = [ ...this.active_toDo_list, ...list ];
  }

}
