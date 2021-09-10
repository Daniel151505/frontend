import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input('isSidebarOpen') isSidebarOpen: boolean = false;
  @Input('isSearchBoxOpen') isSearchBoxOpen: boolean = false;
  @Input('isOpenNotifi') isOpenNotifi: boolean = false;
  @Input('isOpenService') isOpenService: boolean = false;
  @Input('isOpenOption') isOpenOption: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidbarMenu() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
