import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {SymptomPage} from "../symptom/symptom";
import {RecordPage} from "../record/record";
import {HistoryPage} from "../history/history";
import {ProfilePage} from "../profile/profile";

@Component({
  selector:'page-tabs',
  template:`
    <ion-tabs selectedIndex="0">
        <ion-tab [root]="homePage" tabTitle="Home" tabIcon="home"></ion-tab>
        <ion-tab [root]="historyPage" tabTitle="History" tabIcon="folder"></ion-tab>
        <ion-tab [root]="symptomPage" tabTitle="Symptom" tabIcon="search"></ion-tab>
        <ion-tab [root]="recordPage" tabTitle="Record" tabIcon="clipboard"></ion-tab>
        <ion-tab [root]="profilePage" tabTitle="Profile" tabIcon="person"></ion-tab>
    </ion-tabs>
    `
})
export class TabsPage{
  homePage = HomePage;
  historyPage = HistoryPage;
  symptomPage = SymptomPage;
  recordPage = RecordPage;
  profilePage = ProfilePage;
}
