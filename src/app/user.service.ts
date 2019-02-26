import { Injectable } from '@angular/core';
import { initializeApp, database } from 'firebase';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { products } from 'src/app/products';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) {
    

  }
  login(user: any) {
    return database().ref('user/' + user.username).once('value').then(s => {
      //console.log(s.val());
      if (s.val() != null) {
        if (s.val().password == user.psw) {
          localStorage.setItem('user', user.username);
          this.router.navigateByUrl('');
        }
      }
      else {
        //chua co tai khoan
        return alert('Account is not available');
      }
    })
  }
  logout()
  {
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }


}
