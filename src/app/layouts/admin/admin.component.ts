import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isSidebarOpen: boolean = false;

  // @Output('toggleSidbar') toggleSidbar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidbarMenu(event: any) {
    console.log(event)
    this.isSidebarOpen = event;
  }

}
