import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {
  @Input() event: string;
  
  constructor() { }

  ngOnInit() {
  }

}
