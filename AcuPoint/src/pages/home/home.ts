import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DevicePage} from "../device/device";
import {SymptomsPage} from "../symptoms/symptoms";

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  devicePage = DevicePage;
  symptomsPage = SymptomsPage;
}
