import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BluetoothPage} from "../bluetooth/bluetooth";

/*
  Generated class for the Treatmentlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-treatmentlist',
  templateUrl: 'treatmentlist.html'
})
export class TreatmentlistPage {

bluetoothPage = BluetoothPage;

}
