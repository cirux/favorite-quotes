import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';


@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  // an array of quotes
  quoteCollection : { category: string, quotes: Quote[], icon: string }[];
  // reference to QuotesPage
  quotesPage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quotesPage = QuotesPage;
  }

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
