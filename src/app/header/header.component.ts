import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private UserService:UserService) { }

  user:any;
  ngOnInit() {
    this.user=localStorage.getItem('user');
  }
  logout()
  {
    this.UserService.logout();
  }
}
