import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../../../services/app.service';

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


  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.isSidebarToggeled$.subscribe(toggle =>  this.isSidebarOpen = toggle);
  }

  toggleSidbarMenu() {
    this.appService.isSidebarToggeled$.emit(this.isSidebarOpen = !this.isSidebarOpen);
  }

}
