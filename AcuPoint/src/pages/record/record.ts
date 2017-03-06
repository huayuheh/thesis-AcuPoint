import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecorddetailPage } from '../recorddetail/recorddetail';
/*
  Generated class for the Record page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage {

  recorddetailPage = RecorddetailPage;

}
