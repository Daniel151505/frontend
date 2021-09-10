import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './navbars/admin-navbar/admin-navbar.component';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterAdminComponent } from './footers/footer-admin/footer-admin.component';
import { FooterComponent } from './footers/footer/footer.component';



@NgModule({
  declarations: [
    AdminNavbarComponent,
    IndexNavbarComponent,
    SidebarComponent,
    FooterAdminComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminNavbarComponent,
    SidebarComponent,
    FooterAdminComponent
  ]
})
export class ComponentsModule { }
