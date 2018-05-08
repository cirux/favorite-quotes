import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

/**
 * This page is responsible of displaying all the quotes of a given category.
 * Each quote will be in a Card component.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup : { category: string, quotes: Quote[], icon: string };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {

  }

  /**
   * Runs before the template is rendered
   */
  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  /**
   * Runs after the template is rendered
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    // this.quoteGroup = this.navParams.data;
    // need to use {{ quoteGroup?.category | uppercase}} in template
  }

  onAddToFavorites(selectedQuote : Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok');
            this.quotesService.addQuoteToFavorite(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!!');
          }
        }
      ]
    });

    alert.present();

  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeQuoteFromFavorite(quote);
  }

  isFavorite(quote: Quote){
    return this.quotesService.isQuoteFavorite(quote);
  }



}
