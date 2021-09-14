import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.authService.user().subscribe(resp => {
      console.log('gaaaaaaaaaaaaaaa',resp);
    })
  }
}
