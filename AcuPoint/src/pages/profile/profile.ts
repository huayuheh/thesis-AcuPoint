import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoadingPage} from "../loading/loading";


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  loadingPage = LoadingPage;

}
