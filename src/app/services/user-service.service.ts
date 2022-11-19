import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Lot } from '../lot.model';
import { Sheed } from '../sheed.model';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  private permissions: object;
  private farms: string[];
  private users: string[];
  private lots: Lot[];
  private sheeds: Sheed[];

  constructor(private auth: Auth) {

    this.permissions = {
      "default": [-1, 0, 0.1],
      "AvicolaFarm": [-1, 0, 0.1, 1, 1.1, 1.2, 1.3, 2, 2.1, 2.2, 2.3, 2.4, 3, 3.1, 3.2, 3.3, 3.4, 4, 4.1, 4.2, 4.3, 4.4, 5],
      "SIGEAVI Farm": [-1, 0, 0.1, 2, 2.1, 2.2, 2.3, 2.4, 3, 3.1, 3.2, 3.3, 3.4, 4, 4.1, 4.2, 4.3, 4.4, 5]
    };

    this.farms = ["AvicolaFarm", "SIGEAVI Farm"];
    this.users = ["crispo2001@hotmail.com", "cristian.parada@uptc.edu.co"];

    this.lots = [
      new Lot('L-1', new Date(2022, 3, 21), 'G-1', 250, 'Hy-Line Brown'),
      new Lot('L-2', new Date(2022, 1, 1), 'G-2', 20, 'Hy-Line Brown'),
      new Lot('L-3', new Date(2022, 5, 12), 'G-3', 30, 'Hy-Line Brown'),
      new Lot('L-4', new Date(2022, 6, 11), 'G-1', 50, 'Hy-Line Brown'),
      new Lot('L-5', new Date(2022, 7, 10), 'G-2', 100, 'Hy-Line Brown'),
      new Lot('L-6', new Date(2022, 8, 10), 'G-3', 120, 'Hy-Line Brown'),
      new Lot('L-7', new Date(2022, 9, 10), 'G-3', 110, 'Hy-Line Brown'),
      new Lot('L-8', new Date(2022, 10, 30), 'G-4', 110, 'Hy-Line Brown'),
      new Lot('L-9', new Date(2022, 11, 21), 'G-5', 90, 'Hy-Line Brown'),
      new Lot('L-10', new Date(2022, 10, 22), 'G-5', 15, 'Hy-Line Brown'),
      new Lot('L-11', new Date(2022, 1, 12), 'G-1', 113, 'Hy-Line Brown'),
      new Lot('L-12', new Date(2022, 2, 21), 'G-2', 121, 'Hy-Line Brown')
    ];

    this.sheeds = [
      new Sheed('G-1', 200, '100 metros', '100 metros'),
      new Sheed('G-2', 250, '100 metros', '100 metros'),
      new Sheed('G-3', 100, '100 metros', '100 metros'),
      new Sheed('G-4', 10, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros'),
      new Sheed('G-5', 20, '100 metros', '100 metros')
    ];

  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  registerUser(names: string, lastnames: string, email: string, phone: number, id: number, pass: string) {
    if(pass.length > 0){
      createUserWithEmailAndPassword(this.auth, email, pass);
    }
  }

  loginWithEmailAndPassword(email, password){
    return signInWithEmailAndPassword(this.auth,email, password);
  }

  getLots() {
    return this.lots;
  }

  loginWithFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider());
  }

  logout() {
    return this.auth.signOut();
  }

  getUsersRegistered() {
    return this.users;
  }

  getFarms() {
    return this.farms;
  }

  getSheeds() {
    return this.sheeds;
  }

  getPermissions() {
    return this.permissions;
  }
}
