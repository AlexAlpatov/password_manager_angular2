import {Component, Input, OnInit} from '@angular/core';
import {Location}                 from '@angular/common';
import {Router}                   from '@angular/router';



import {Account} from './mock/mock-accaunt';
import {AccountService} from './account.service';

@Component({
  selector: 'registration-page',
  templateUrl: '../template/registration.html',
  providers: [AccountService]


})
export class RegistrationComponent implements OnInit {

  private markerErrorNumber: number;
  account: Account [];
  public newUserAccount = {
    username: '',
    lastname: '',
    password: ''
  };

  constructor(private _accountService: AccountService,
              private router: Router,
              private location: Location
  ) { }



  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    this._accountService.getAccount().then(accounts => this.account = accounts);
  }
  setAccount(newAccount){
    this._accountService.setAccount(newAccount)
  }

  registration() {

    let clearName = this.isNameClear(this.newUserAccount.username);

    if (clearName) {
      if (this.newUserAccount.username.length > 2 && this.newUserAccount.lastname.length > 1 && this.newUserAccount.password.length > 2) {
        this.setAccount(this.newUserAccount);
        alert('Thank you for signing up');
        this.router.navigate(['/sign-in']);
      }
      else {
        this.markerErrorNumber = 2;
      }
    }
    else {
      this.markerErrorNumber = 1;
    }

  }

  isNameClear(username) {
    let resultCheckName = this.account.find(user => {
      return (user.username == username);
    });
    return resultCheckName == null;
  }




  goBack() {
    this.location.back();
  }

}
