import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { UserContentService } from './user-content.service';
import { AccountService } from './account.service';

@Component({
    selector: 'user-page',
    templateUrl: '../template/user-page.html'
})
export class UserPageComponent implements OnInit{


  public currentUser: string = '';
  public userContentList: any = [];
  public userContentItem = {
    website:'',
    login:'',
    password:''
  };


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _userContentService: UserContentService,
    private _accountService: AccountService
  ) {}


  ngOnInit() {
    this.currentUser = this._userContentService.currentUser;
    this.userContentList = this._userContentService.getUserContent(this._userContentService.currentUser);

  }


  addUserContent() {
    this.userContentList.push(this.userContentItem);
    this.saveData();

    this.userContentItem = {
      website:'',
      login:'',
      password:''
    };
  }

  deleteItem(index: number) {
    this.userContentList.splice(index, 1);
    this.saveData();
  }

  showPassword(index: number){
    let inpPass = document.getElementsByClassName('inpPass')[index];
    if (inpPass.getAttribute('type') == 'password') {
      inpPass.setAttribute('type', 'text');
    } else {
      inpPass.setAttribute('type', 'password');
    }
  }

  startEdit(event){
    let el = event.target.previousSibling;
    el.removeAttribute('disabled');
    el.focus();


  }
  finishEdit(event) {

    event.target.setAttribute("disabled", "true");
    this.saveData();

  }


  saveData(){
    this._userContentService.setUserContent(this.currentUser, this.userContentList);
    console.log('saveee');

  }

  logOut() {
    this.location.back();
    this._accountService.logout();
  }

}
