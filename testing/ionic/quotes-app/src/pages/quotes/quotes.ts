import { Component, OnInit } from '@angular/core';
import {  NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string };
  constructor(
    private navParams:NavParams,
    private  alertCtrl:AlertController){}

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data;
  // add elvis operator (?) in template to use this approach
  // }

  onAddToFavorite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title:'Add quote',
      subTitle:'Are you sure?',
      message:'Are you sure you want to add the quote?'
    });

    alert.present();
  }
}
