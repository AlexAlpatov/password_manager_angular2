import { Injectable }       from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService }      from './account.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _accountService: AccountService, private router: Router) {}

  canActivate(): boolean {
    // console.log(this._accountService.getStatusLogin());
    // return this._accountService.getStatusLogin();

    return true; ///// kostili
  }
}
