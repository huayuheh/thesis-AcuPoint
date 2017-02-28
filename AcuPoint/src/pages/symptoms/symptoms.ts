import { Component, OnInit } from '@angular/core';
import {  NavParams, AlertController } from 'ionic-angular';

import { Symptom } from "../../data/symptoms.interface";

import symptoms from '../../data/symptoms';
import { SymptomlistPage } from "../symptomlist/symptomlist";

@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html'
})

export class SymptomsPage implements OnInit{
  symptomCollection: {body: string, symptoms: Symptom[], icon: string }[];
  symptomlistPage = SymptomlistPage;

  ngOnInit(){
    this.symptomCollection = symptoms;
  }
}
