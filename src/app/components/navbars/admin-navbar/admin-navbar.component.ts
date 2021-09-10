import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  isSidebarOpen: boolean = false;
  isSearchBoxOpen: boolean = false;
  isOpenNotifi: boolean = false;
  isOpenService: boolean = false;
  isOpenOption: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidbarMenu() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
