import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebFrontEnd';
  
  constructor() {
    var config = {
      apiKey: "AIzaSyAn6SRvxlE8ecYz3k0CD-CwOOEsRP4TSrk",
      authDomain: "demofirebase-3ff7d.firebaseapp.com",
      databaseURL: "https://demofirebase-3ff7d.firebaseio.com",
      projectId: "demofirebase-3ff7d",
      storageBucket: "demofirebase-3ff7d.appspot.com",
      messagingSenderId: "921141665759"
    };
    initializeApp(config);
  }
}
