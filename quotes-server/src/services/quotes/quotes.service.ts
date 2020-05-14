import { Injectable } from '@nestjs/common';
import { Quote } from 'src/model/quotes.model';

@Injectable()
export class QuotesService {
    quotes: Quote[] = [
        {
           id: '1',
           title: 'Titulo 1',
           author: 'Gabriel'          
        },
        {
            id: '2',
            title: 'Titulo 2',
            author: 'João'          
         },
         {
            id: '3',
            title: 'Titulo 3',
            author: 'Cleusa'          
         }

    ]


    getQuotes(): Quote[] {
        return this.quotes;
    }

    getQuote(id: string): Quote {
        return this.quotes.find(quote => quote.id === id);
    }

    createQuote(quote: Quote) {
        return quote;
    }

    updateQuote(id: string, updateQuoteDto): Quote {
        let data = this.quotes.find(quote => quote.id === id);
        data.title  = updateQuoteDto.title ? updateQuoteDto.title : data.title
        data.author  = updateQuoteDto.author ? updateQuoteDto.author : data.author
        return data;
    }

    deleteQuote(id: string){
    return this.quotes.find(quote => quote.id === id);
    }
}
