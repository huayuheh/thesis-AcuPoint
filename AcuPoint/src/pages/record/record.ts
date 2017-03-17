import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { RecorddetailPage } from '../recorddetail/recorddetail';

@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage {

  recorddetailPage = RecorddetailPage;

  record: string = "symptoms";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }


}
