import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController } from 'ionic-angular';
import {BaselinePage} from "../baseline/baseline";

@Component({
  selector: 'page-symptom',
  templateUrl: 'symptom.html'
})
export class SymptomPage {

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public nav: NavController
  ) { }

  baselinePage = BaselinePage;

  openHeadMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Head Symptoms',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Cold',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cough',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'eye sight',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {

          }
        },
        {
          text: 'Headache',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            this.nav.push(BaselinePage);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
