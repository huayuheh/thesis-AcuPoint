import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from "../tabs/tabs";
import {FacebooksigninPage} from "../facebooksignin/facebooksignin";
import {GooglesigninPage} from "../googlesignin/googlesignin";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  signupPage = SignupPage;
  tabsPage = TabsPage;
  facebooksigninPage = FacebooksigninPage;
  googlesigninPage = GooglesigninPage;
}
