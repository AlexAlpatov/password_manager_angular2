import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AppComponent }  from './app.component';
import { SignInComponent }  from './sign-in.component';
import { RegistrationComponent }  from './registration.component';
import { UserPageComponent }  from './user-page.component';
import { AccountService } from './account.service';
import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './pageNotFound.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: '',
        redirectTo: '/sign-in',
        pathMatch: 'full'
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'user/:name',
        component: UserPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '**', component: PageNotFoundComponent
      }

    ])
  ],
  declarations: [
    AppComponent,
    SignInComponent,
    RegistrationComponent,
    UserPageComponent,
    PageNotFoundComponent
  ],
  providers: [
    AccountService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
