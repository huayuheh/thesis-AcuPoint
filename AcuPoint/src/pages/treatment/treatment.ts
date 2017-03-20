import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';

/*
  Generated class for the Treatment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-treatment',
  templateUrl: 'treatment.html'
})
export class TreatmentPage {
  feedbackPage = FeedbackPage;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    setTimeout(myFunction, 3000);
  }



  // showConfirm() {
  //   let confirm = this.alertCtrl.create({
  //     title: 'Use this lightsaber?',
  //     message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
  //     buttons: [
  //       {
  //         text: 'Disagree',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'Agree',
  //         handler: () => {
  //           console.log('Agree clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

}

function myFunction(){
  document.getElementById("option").style.display = "block";
}

