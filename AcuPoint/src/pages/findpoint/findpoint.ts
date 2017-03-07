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
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
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
