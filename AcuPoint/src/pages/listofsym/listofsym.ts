import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Symptom } from "../../data/symptoms.interface";


@Component({
  selector: 'page-listofsym',
  templateUrl: 'listofsym.html'
})
export class symlistPage implements OnInit{
  symptomCollection: {body: string, symptoms: Symptom[], icon: string }[];
  constructor(
      private navParams:NavParams,
      private  alertCtrl:AlertController){}

  ngOnInit(){
    this.symptomCollection = this.navParams.data;
  }

}
