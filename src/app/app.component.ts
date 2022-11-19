import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Avicola';
  isLogin = false;
  
  constructor(){
    AOS.init();
    window.addEventListener('load',AOS.refresh);
  }

  ngOnInit(): void {
    if (location.href.charAt(location.href.length-1) == '/') {
      this.isLogin = false;
      
    }else if (location.href.includes('/home')) {
      this.isLogin = false;
    }else{
      this.isLogin = true;
    }
  }
}