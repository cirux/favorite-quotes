import { Quote } from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorite(quote: Quote){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorite(quote: Quote){
    const position = this.favoriteQuotes.findIndex((quoteElem: Quote) => {
      return quoteElem.id == quote.id;
    });

    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes(){
    // returns a COPY of the array
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote){
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
