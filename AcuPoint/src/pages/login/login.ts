import { Component, Directive } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from "../tabs/tabs";
import {FacebooksigninPage} from "../facebooksignin/facebooksignin";
import {GooglesigninPage} from "../googlesignin/googlesignin";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
@Directive({
  selector: '[hideTabs]'
})

export class HideTabsDirective {
  constructor(private viewCtrl: ViewController) {


export class LoginPage {

  signupPage = SignupPage;
  tabsPage = TabsPage;
  facebooksigninPage = FacebooksigninPage;
  googlesigninPage = GooglesigninPage;
}
