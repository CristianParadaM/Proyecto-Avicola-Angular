import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Sheed } from '../sheed.model';

interface ISelected {
  index: number;
  value: boolean;
}

@Component({
  selector: 'app-sheed',
  templateUrl: './sheed.component.html',
  styleUrls: ['./sheed.component.css']
})

export class SheedComponent implements OnInit {

  protected placeholderSearch;
  protected sheedsOriginal: Sheed[];
  protected sheeds: Sheed[];
  protected selection: ISelected[];

  constructor(private userService: UserServiceService) {
    this.placeholderSearch = "Buscar por numero / dimensiones";
    this.sheedsOriginal = this.userService.getSheeds();
  }

  ngOnInit(): void {
    this.sheeds = this.sheedsOriginal;
    this.selection = [];
    for (let i = 0; i < this.sheedsOriginal.length; i++) {
      this.selection.push({ index: i, value: false });
    }
  }


  filtre(pattern: string) {
    this.sheeds = [];
    this.sheedsOriginal.forEach(element => {
      if (element.sheed.includes(pattern)) {
        this.sheeds.push(element);
      } else if (element.quanty.toString().includes(pattern)) {
        this.sheeds.push(element);
      } else if (element.width.toString().includes(pattern)) {
        this.sheeds.push(element);
      } else if (element.height.toString().includes(pattern)) {
        this.sheeds.push(element);
      }
    });
  }

  order(orderBy) {
    switch (orderBy) {
      case 0:
        this.sheeds = this.sheeds.sort((a: Sheed, b: Sheed) => {
          return parseInt(a.sheed.substring(2, a.sheed.length)) >= parseInt(b.sheed.substring(2, b.sheed.length)) ? 1 : -1;
        });
        break;
      case 1:
        this.sheeds = this.sheeds.sort((a: Sheed, b: Sheed) => {
          return a.quanty > b.quanty ? 1 : -1;
        });
        break;
        case 2:
          this.sheeds = this.sheeds.sort((a: Sheed, b: Sheed) => {
          return a.width > b.width ? 1 : -1;
        });
        break;
      case 3:
        this.sheeds = this.sheeds.sort((a: Sheed, b: Sheed) => {
          return a.height > b.height ? 1 : -1;
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
      } else {
        element.value = false;
      }
    });
  }

}
