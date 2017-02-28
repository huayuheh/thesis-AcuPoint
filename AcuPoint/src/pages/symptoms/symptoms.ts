import { Component, OnInit } from '@angular/core';
import {  NavParams, AlertController } from 'ionic-angular';

import { Symptom } from "../../data/symptoms.interface";

import symptoms from '../../data/symptoms';
import {ListofsymPage} from "../listofsym/listofsym";

@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html'
})

export class SymptomsPage implements OnInit{
  symptomCollection: {body: string, symptoms: Symptom[], icon: string }[];
  listofsymPage = ListofsymPage;

  ngOnInit(){
    this.symptomCollection = symptoms;
  }
}
