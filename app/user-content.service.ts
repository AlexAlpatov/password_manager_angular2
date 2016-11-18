import { Injectable } from '@angular/core';

@Injectable()
export class UserContentService {

  public currentUser: string;

  getUserContent(username: string)  {
    let userContentInStorage;
    if (localStorage.getItem(username + '_userContentInStorage')) {
      userContentInStorage = JSON.parse(localStorage.getItem(username + '_userContentInStorage'));
    } else {
      userContentInStorage = [];

    }
   return userContentInStorage;
  }

  setUserContent(username: string, newWebsiteList: any)  {
      let saveCollection = JSON.stringify(newWebsiteList);
      localStorage.setItem(username + '_userContentInStorage', saveCollection);
  }

}
