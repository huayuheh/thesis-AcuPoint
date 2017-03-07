import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TreatmentlistPage} from "../treatmentlist/treatmentlist";


@Component({
  selector: 'page-baseline',
  templateUrl: 'baseline.html'
})
export class BaselinePage {
  treatmentlistPage = TreatmentlistPage;

  baseline: number = 3;



}
