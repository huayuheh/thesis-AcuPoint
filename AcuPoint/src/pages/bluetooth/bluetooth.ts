import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DevicePage} from "../device/device";

/*
  Generated class for the Bluetooth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})
export class BluetoothPage {

  devicePage = DevicePage;

}