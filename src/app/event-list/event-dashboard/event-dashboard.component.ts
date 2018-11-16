import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.scss']
})
export class EventDashboardComponent implements OnInit, OnChanges {
  @Input() toDoList: any[] = [];
  item_name: string;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    console.log("=============Dashboard", this.toDoList)
  }

  onItemAdd(){
    this.toDoList = [...this.toDoList, this.item_name];
    this.item_name = "";
  }

}
