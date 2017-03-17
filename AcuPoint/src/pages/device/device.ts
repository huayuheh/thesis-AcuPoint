import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ConnectPage} from "../connect/connect";

/*
  Generated class for the Device page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class DevicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }
  connectPage = ConnectPage;

}
