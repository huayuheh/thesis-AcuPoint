import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {SymptomsPage} from "../symptoms/symptoms";
import {RecordPage} from "../record/record";

@Component({
  selector:'page-tabs',
  template:`
    <ion-tabs selectedIndex="0">
        <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>
        <ion-tab [root]="symptomsPage" tabTitle="Symptom" tabIcon="search"></ion-tab>
        <ion-tab [root]="recordPage" tabTitle="Record" tabIcon="folder"></ion-tab>
    </ion-tabs>
    `
})
export class TabsPage{
  homePage = HomePage;
  symptomsPage = SymptomsPage;
  recordPage = RecordPage;
}
