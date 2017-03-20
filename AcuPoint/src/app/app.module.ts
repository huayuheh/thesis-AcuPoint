import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoadingPage } from '../pages/loading/loading';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { FacebooksigninPage } from "../pages/facebooksignin/facebooksignin";
import { GooglesigninPage } from "../pages/googlesignin/googlesignin";

import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { SymptomPage } from '../pages/symptom/symptom';

import { TabsPage } from '../pages/tabs/tabs';
import { SymptomlistPage } from "../pages/symptomlist/symptomlist";

import { RecordPage } from '../pages/record/record';
import { RecorddetailPage } from '../pages/recorddetail/recorddetail';
import {DevicePage} from "../pages/device/device";
import {ProfilePage} from "../pages/profile/profile";
import {ConnectPage} from "../pages/connect/connect";

import { BaselinePage } from "../pages/baseline/baseline";
import { TreatmentlistPage } from "../pages/treatmentlist/treatmentlist";
import { FindpointPage } from "../pages/findpoint/findpoint";
import { TreatmentPage } from "../pages/treatment/treatment";
import { FeedbackPage } from "../pages/feedback/feedback";


@NgModule({
  declarations: [
    MyApp,
    LoadingPage,
    SignupPage,
    LoginPage,
    FacebooksigninPage,
    GooglesigninPage,

    HomePage,
    DevicePage,
    HistoryPage,
    SymptomsPage,
    SymptomPage,
    ProfilePage,
    RecordPage,
    TabsPage,

    ConnectPage,
    RecorddetailPage,

    SymptomlistPage,
    BaselinePage,
    TreatmentlistPage,
    FindpointPage,
    TreatmentPage,
    FeedbackPage


  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoadingPage,
    SignupPage,
    LoginPage,
    FacebooksigninPage,
    GooglesigninPage,

    HomePage,
    DevicePage,
    HistoryPage,
    SymptomsPage,
    SymptomPage,
    ProfilePage,
    RecordPage,
    TabsPage,

    ConnectPage,
    SymptomlistPage,
    RecorddetailPage,
    BaselinePage,
    TreatmentlistPage,
    FindpointPage,
    TreatmentPage,
    FeedbackPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
