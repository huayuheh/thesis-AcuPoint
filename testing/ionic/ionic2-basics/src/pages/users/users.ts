import { Component } from '@angular/core';

import { UserPage } from "./user/user"
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  constructor (private navCtrl: NavController){}

  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }
}
