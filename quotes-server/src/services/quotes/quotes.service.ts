import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {

    getQuotes(): string {
        return 'Return LALA';
    }

    getQuote(id: number) {
        return id;
    }

    createQuotes(quote: any) {
        return quote;
    }
}
