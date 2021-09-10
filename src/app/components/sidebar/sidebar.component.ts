import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSidebarOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidbarMenu() {
    
  }

}
