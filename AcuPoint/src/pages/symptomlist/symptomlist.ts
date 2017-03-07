import { Component, OnInit } from '@angular/core';
import {  NavParams, AlertController } from 'ionic-angular';
import { Symptom } from "../../data/symptoms.interface";
import {BaselinePage} from "../baseline/baseline";


@Component({
  selector: 'page-symptomlist',
  templateUrl: 'symptomlist.html'
})


export class SymptomlistPage implements OnInit{
  symGroup: {body: string, symptoms: Symptom[], icon: string }[];
  constructor(
      private navParams:NavParams,
      private  alertCtrl:AlertController){}

  ngOnInit(){
    this.symGroup = this.navParams.data;
  }
  baselinePage = BaselinePage;
  // onAddToFavorite(selectedQuote: Quote){
  //   const alert = this.alertCtrl.create({
  //     title:'Add quote',
  //     subTitle:'Are you sure?',
  //     message:'Are you sure you want to add the quote?',
  //     buttons:[
  //       {
  //         text: 'Yes, go ahead',
  //         handler: () =>{
  //           console.log('OK');
  //         }
  //       },{
  //         text: 'No, I change my mind',
  //         handler: () =>{
  //           console.log('Cancelled');
  //         }
  //       }
  //     ]
  //   });
  //
  //   alert.present();
  // }
}
