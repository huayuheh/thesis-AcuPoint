import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FindpointPage} from "../findpoint/findpoint";

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

  findpointPage = FindpointPage;

}
