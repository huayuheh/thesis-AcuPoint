import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoadingPage } from '../pages/loading/loading';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { FacebooksigninPage } from "../pages/facebooksignin/facebooksignin";
import { GooglesigninPage } from "../pages/googlesignin/googlesignin";

import { HomePage } from '../pages/home/home';

import { SymptomsPage } from '../pages/symptoms/symptoms';
import { TabsPage } from '../pages/tabs/tabs';
import { SymptomlistPage } from "../pages/symptomlist/symptomlist";
import {BaselinePage} from "../pages/baseline/baseline";
import {TreatmentlistPage} from "../pages/treatmentlist/treatmentlist";
import {BluetoothPage} from "../pages/bluetooth/bluetooth";
import {DevicePage} from "../pages/device/device";
import {FindpointPage} from "../pages/findpoint/findpoint";
import {TreatmentPage} from "../pages/treatment/treatment";
import {FeedbackPage} from "../pages/feedback/feedback";

import { RecordPage } from '../pages/record/record';
import { RecorddetailPage } from '../pages/recorddetail/recorddetail';



@NgModule({
  declarations: [
    MyApp,
    LoadingPage,
    SignupPage,
    LoginPage,
    FacebooksigninPage,
    GooglesigninPage,

    HomePage,
    SymptomsPage,
    TabsPage,
    SymptomlistPage,
    BaselinePage,
    TreatmentlistPage,
    BluetoothPage,
    DevicePage,
    FindpointPage,
    TreatmentPage,
    FeedbackPage,

    RecordPage,
    RecorddetailPage


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
    SymptomsPage,
    TabsPage,
    SymptomlistPage,
    BaselinePage,
    TreatmentlistPage,
    BluetoothPage,
    DevicePage,
    FindpointPage,
    TreatmentPage,
    FeedbackPage,

    RecordPage,
    RecorddetailPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
