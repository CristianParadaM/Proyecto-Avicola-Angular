import { Component, OnInit } from '@angular/core';
import { Lot } from '../lot.model';
import { UserServiceService } from '../services/user-service.service';
import { Sheed } from '../sheed.model';

interface ISelected {
  index: number;
  value: boolean;
}

@Component({
  selector: 'app-chickens',
  templateUrl: './chickens.component.html',
  styleUrls: ['./chickens.component.css']
})

export class ChickensComponent implements OnInit {

  protected placeholderSearch;
  protected nLote;
  protected birthdate;
  protected sheep;
  protected quanty;
  protected raceChickens;
  protected lots: Lot[];
  protected lotsOriginal: Lot[];
  protected sheeds: Sheed[];
  protected selection: ISelected[];

  constructor(private userService: UserServiceService) {
    this.placeholderSearch = "Buscar por fecha / Número de lote / Galpón asignado / raza";
    this.nLote = "Numero de Lote";
    this.birthdate = "Fecha de Nacimiento de las Aves";
    this.sheep = "Galpón Asignado";
    this.quanty = "Cantidad de Aves";
    this.raceChickens = "Raza de las Aves";
    this.lotsOriginal = userService.getLots();
    this.sheeds = userService.getSheeds();
  }

  ngOnInit(): void {
    this.lots = this.lotsOriginal;
    this.selection = [];
    for (let i = 0; i < this.lotsOriginal.length; i++) {
      this.selection.push({ index: i, value: false });
    }
  }

  filtre(pattern: string) {
    this.lots = [];
    this.lotsOriginal.forEach(element => {
      let date = this.getParseDate(element.date, undefined);
      if (date.includes(pattern)) {
        this.lots.push(element);
      } else if (element.lot.includes(pattern)) {
        this.lots.push(element);
      } else if (element.sheed.includes(pattern)) {
        this.lots.push(element);
      } else if (element.race.includes(pattern)) {
        this.lots.push(element);
      }
    });
  }

  getParseDate(date: Date, pattern): string {
    let dateParse: string;
    if (pattern != undefined) {
      if (date.getMonth() < 10) {
        if (date.getDate() < 10) {
          dateParse = date.getFullYear() + '-0' + date.getMonth() + '-0' + date.getDate();
        } else {
          dateParse = date.getFullYear() + '-0' + date.getMonth() + '-' + date.getDate();
        }
      } else {
        if (date.getDate() < 10) {
          dateParse = date.getFullYear() + '-0' + date.getMonth() + '-0' + date.getDate();
        } else {
          dateParse = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        }
      }
    } else {
      if (date.getMonth() < 10) {
        if (date.getDate() < 10) {
          dateParse = '0' + date.getDate() + '/0' + date.getUTCMonth() + '/' + date.getFullYear();
        } else {
          dateParse = date.getDate() + '/0' + date.getMonth() + '/' + date.getFullYear();
        }
      } else {
        if (date.getDate() < 10) {
          dateParse = '0' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        } else {
          dateParse = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        }
      }
    }
    return dateParse;
  }

  order(orderBy) {
    switch (orderBy) {
      case 0:
        this.lots = this.lots.sort((a: Lot, b: Lot) => {
          return parseInt(a.lot.substring(2, a.lot.length)) >= parseInt(b.lot.substring(2, b.lot.length)) ? 1 : -1;
        });
        break;
      case 1:
        this.lots = this.lots.sort((a: Lot, b: Lot) => {
          return a.date > b.date ? 1 : -1;
        });
        break;
      case 2:
        this.lots = this.lots.sort((a: Lot, b: Lot) => {
          return parseInt(a.sheed.substring(2, a.sheed.length)) >= parseInt(b.sheed.substring(2, b.sheed.length)) ? 1 : -1;
        });
        break;
      case 3:
        this.lots = this.lots.sort((a: Lot, b: Lot) => {
          return a.quanty > b.quanty ? 1 : -1;
        });
        break;
      case 4:
        this.lots = this.lots.sort((a: Lot, b: Lot) => {
          return a.race >= b.race ? 1 : -1;
        });
        break;

    }
  }

  isSelected(index) {
    return this.selection[index].value;
  }
  
  selectOption(index) {
    this.selection.forEach(element => {
      if (element.index == index) {
        element.value = !element.value;
      }else{
        element.value = false;
      }
    });
  }
}
