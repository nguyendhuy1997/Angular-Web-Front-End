import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserService) { }
  formdata: FormGroup;
  msg:string;
  ngOnInit() {
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,])
      ),
      psw: new FormControl('', Validators.compose([
        Validators.required]))
    });
  }

  onSubmit(formdata) {
    // this.userservice.getLogin(formdata);
   this.userservice.login(formdata);

  }
}
