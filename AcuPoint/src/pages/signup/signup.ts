import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {TabsPage} from "../tabs/tabs";
import {FacebooksigninPage} from "../facebooksignin/facebooksignin";
import {GooglesigninPage} from "../googlesignin/googlesignin";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  loginPage = LoginPage;
  tabsPage = TabsPage;
  facebooksigninPage = FacebooksigninPage;
  googlesigninPage = GooglesigninPage;

}
