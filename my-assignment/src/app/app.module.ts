import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forget-password', component: ForgotpwdComponent},
  {path: 'change-password', component: ChangepwdComponent},
  {path: 'unlock-account', component: UnlockAccountComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ForgotpwdComponent,
    ChangepwdComponent,
    UnlockAccountComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
