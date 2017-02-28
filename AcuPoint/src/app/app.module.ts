import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecordPage } from '../pages/record/record';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { TabsPage } from '../pages/tabs/tabs';
import { SymptomlistPage } from "../pages/symptomlist/symptomlist";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SymptomsPage,
    RecordPage,
    TabsPage,
    SymptomlistPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SymptomsPage,
    RecordPage,
    TabsPage,
    SymptomlistPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
