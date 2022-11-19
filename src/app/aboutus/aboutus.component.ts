import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  protected sections;

  constructor() {
    this.sections = [
      {
        title:"Misión",
        description:"La mision de nuestro software es ...",
      },
      {
        title:"Visión",
        description:"La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... La visión de nuestro software es ... ",
      },
      {
        title:"Objetivo Principal",
        description:"El objetivo principal de nuestro software es ...",
      }
    ];
  }

  ngOnInit(): void {
  }

}
