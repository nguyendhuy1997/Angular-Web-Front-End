import { Component, OnInit } from '@angular/core';
import { ValidatorFn,FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from '../user.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private UserService:UserService,private router: Router) { }
  username:string;
  pass:string;
  rePass:string;
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('')])
      ),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)])
      ),
      rePassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)]))
    });
  }
  onSubmit() {
    firebase.database().ref('user/' + this.username).set({
      password: this.pass
    }, function(error) {
      if (error) {
        console.log('fail');
      } else {
        alert('Register successfully')
      }
    });
  }
  checkPass(){
    if(this.rePass==this.pass)
    {
      return true;
    }
    else {
      return false;
    }
  }

}
