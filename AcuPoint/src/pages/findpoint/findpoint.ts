import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {TreatmentPage} from "../treatment/treatment";

/*
  Generated class for the Findpoint page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-findpoint',
  templateUrl: 'findpoint.html'
})
export class FindpointPage {

  treatmentPage = TreatmentPage;

  constructor(public alerCtrl: AlertController) { }

  ionViewDidLoad() {
    this.doConfirm();
  }


  doConfirm() {
    let confirm = this.alerCtrl.create({

      message: 'AcuPoint would like to access your CAMERA',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
