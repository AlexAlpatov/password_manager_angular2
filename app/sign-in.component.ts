import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { Router}                   from '@angular/router';
import { Location}                 from '@angular/common';
import { Account } from './account';
import { UserContentService } from './user-content.service';

@Component({
    selector: 'signIn-page',
    templateUrl: '../template/signIn.html'
})
export class SignInComponent implements OnInit{


  account: Account [];
  private markerError: boolean = false;
  public userSignIn = {
    login:'',
    password:''
  };

  constructor (
               private _accountService: AccountService,
               private _userContentService: UserContentService,
               private router: Router,
               private location: Location
  ) {}

  ngOnInit() {
    this.getAccount();
    this._userContentService.currentUser = '';

  }


  getAccount() {
    this._accountService.getAccount().then(accounts => this.account = accounts);
  }

  authentication(username, userpassword) {

    let authenticationResult = this.account.filter( (user) => {
      if (user.username == username) {
        return user;
      }
    }).find(function (user) {
      if (user.password == userpassword) {
        return true;
      }
    });
    return authenticationResult != null;

  }

  enter(){

    let result = this.authentication(this.userSignIn.login, this.userSignIn.password);
    if (result){
      this._accountService.setStatusLogin(true);
      this._userContentService.currentUser = this.userSignIn.login;
      this.router.navigate(['/user', this._userContentService.currentUser]);
    }
    else{
      if (!this.markerError){
        this.markerError = true;
      }

    }

  }




}
