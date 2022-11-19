import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crossmenu',
  templateUrl: './crossmenu.component.html',
  styleUrls: ['./crossmenu.component.css']
})
export class CrossmenuComponent {

  protected title:string;
  protected guideText:string;
  protected btnStartNowText:string;
  protected dataNewUser:object;

  constructor() {
    this.title = "SISTEMA DE GESTIÓN Y TRAZABILIDAD DE GRANJAS AVÍCOLAS";
    this.guideText = "¿Eres nuevo en el sector avicola? hecha un vistazo a la guia rapida que te ofrece SIGEAVI";
    this.btnStartNowText = "Inicia Ahora";
  }

}
