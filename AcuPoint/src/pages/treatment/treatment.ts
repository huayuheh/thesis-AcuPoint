import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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



  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatmentPage');
  }

}
