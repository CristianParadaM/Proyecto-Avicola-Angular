import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-lateralmenu',
  templateUrl: './lateralmenu.component.html',
  styleUrls: ['./lateralmenu.component.css']
})

@Injectable()
export class LateralmenuComponent {

  protected optionActive:number;
  protected optionMiFarms;
  protected optionChiken;
  protected optionSheds;
  protected optionFood;
  protected optionReports;
  protected optionUsers;
  protected optionSettings;
  protected welcomeAgain;
  protected nameUser;
  protected addFarm;

  protected farms:string[];
  protected permissions:number[];
  protected isExpanded:boolean;

  protected managementLot;
  protected vaccinationPlan;
  protected mortality;
  
  protected managementSheep;
  protected spaceSheep;
  
  protected inventory;
  protected waterConsumed;
  protected weightControl;
  protected foodguide;
  
  protected foodReport;
  protected mortalityReport;
  protected vaccinationReport;
  protected costsReport;

  protected title;
  protected titleSecundary;
  protected logoutVisible;
  protected curtainVisibility:boolean;
  protected rol;

  constructor(private userService:UserServiceService, private router:Router) {
    this.welcomeAgain = "Bienvenido de nuevo";
    this.nameUser = "Cristian David Parada Martinez";
    this.title = "SISTEMA DE GESTIÓN Y TRAZABILIDAD DE GRANJAS AVICOLAS - SIGEAVI";
    this.titleSecundary = "SIGEAVI";

    this.managementLot = "Gestión de Lotes"
    this.managementSheep = "Gestión Galpones"
    this.optionMiFarms = "Mis Granjas";
    this.optionChiken = "Gallinas";
    this.optionSheds = "Galpones";
    this.optionFood = "Alimentación";
    this.optionReports = "Reportes";
    this.optionUsers = "Usuarios";
    this.optionSettings = "Configuración";

    this.isExpanded = false;
    this.addFarm = "Añadir Granja";
    this.vaccinationPlan = "Plan de Vacunación";
    this.mortality = "Mortalidad";

    this.spaceSheep = "Gestión Espacio";
    
    this.inventory = "Inventario";
    this.waterConsumed = "Consumo de Agua";
    this.weightControl = "Control de Peso";
    this.foodguide = "Guia Alimentación";

    this.foodReport = "Reporte Alimenticio";
    this.mortalityReport = "Reporte Mortalidad";
    this.vaccinationReport = "Reporte Vacunación";
    this.costsReport = "Reporte Costos";

    this.optionActive = -1;
    this.permissions = this.userService.getPermissions()['default'];
    this.farms = userService.getFarms();
    this.rol = "Administrador";

  }

  logOut(){
    this.userService.logout()
    .then(()=>{
      location.href = "/home";
    })
    .catch();
  }

  changeCurtainVisibility(b){
    this.curtainVisibility = b;
  }

  getPermission(index):boolean{
    return this.permissions.find(element => element == index) != undefined;
  }

  changeTitle(title:string){
    this.title = title.toUpperCase();
    this.titleSecundary = title.toUpperCase();
  }

  select(index, optionSelected, title){
    this.optionActive = index;
    if (optionSelected != undefined) {
      this.title = title;
    }
    switch(optionSelected){
      case -1:
        this.router.navigate([`/menu`]);
        break;
      case 1.1: 
      this.router.navigate([`/chickens/${1}`]);
        break;
      case 2.1: 
      this.router.navigate([`/sheeds/${1}`]);
        break;
    }
  }

  changeLogoutVisibility(){
    this.logoutVisible = !this.logoutVisible;
  }

  expand(b:boolean){
    this.isExpanded = b;
  }

  selectFarm(farm){
    this.optionMiFarms = farm;
    this.permissions = this.userService.getPermissions()[farm];
  }
}
