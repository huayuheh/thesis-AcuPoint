import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import {LibraryPage} from "../pages/library/library";
import {QuotesPage} from "../pages/quotes/quotes";
import {QuotePage} from "../pages/quote/quote";
import { SettingPage } from "../pages/setting/setting";
import { TabsPage } from "../pages/tabs/tabs";
@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
