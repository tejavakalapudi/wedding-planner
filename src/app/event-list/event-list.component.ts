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

  constructor() { }

  ngOnInit() {
  }

  onEventAdd(){
    this.event_name && this.events.push( this.event_name );
    this.event_name = "";
  }

}
