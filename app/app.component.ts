import {Component, AfterViewInit, ViewChild, EventEmitter} from '@angular/core';
import { SignInComponent }  from './sign-in.component';
import { RegistrationComponent }  from './registration.component';
import { AccountService } from './account.service';
import { UserContentService } from './user-content.service';

import { Account } from './account';

@Component({
    selector: 'my-app',
    providers: [AccountService,UserContentService],
    template: `               
               
               <router-outlet></router-outlet>
               `,
})
export class AppComponent implements AfterViewInit{

  receiveEvent(event) { console.log('Click event from angulartypescript.com'); console.log(event);  }



account: Account [];

  constructor (
    private _accountService: AccountService
  ) {}



  ngAfterViewInit() {

  }

}
