import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingPage {

  signupPage = SignupPage;
  loginPage = LoginPage;


}
