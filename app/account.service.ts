import { Injectable } from '@angular/core';
import { ACCOUNT } from './mock/mock-accaunt'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AccountService {

  constructor() {}

  public isLogin: boolean  = false;


  setStatusLogin(value: boolean) {
    console.log('set value', value);
    this.isLogin = value;
    console.log('new value', this.isLogin);
  }
  getStatusLogin(){
    console.log('gett-', this.isLogin);
    return this.isLogin;
  }

  logout(): void {
    this.isLogin = false;

  }

  getAccount() {
    let usersInStorage;
    if (localStorage.getItem('usersAccounts')) {
      usersInStorage = JSON.parse(localStorage.getItem('usersAccounts'));
    } else {
      usersInStorage = ACCOUNT;
    }
   return Promise.resolve(usersInStorage);
  }

  setAccount(newAccount) {
      ACCOUNT.push(newAccount);
      let saveCollection = JSON.stringify(ACCOUNT);
      localStorage.setItem('usersAccounts', saveCollection);
  }

}
