import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DevicePage} from "../device/device";

/*
  Generated class for the Connect page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html'
})
export class ConnectPage {

  devicePage = DevicePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    delayedAlert();
  }

}

var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}
function slowAlert() {
  console.log("timmer");

}
