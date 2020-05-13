import { Controller, Get } from '@nestjs/common';

@Controller('quotes')
export class QuotesController {

    @Get()
    getQuotes() {
        return 'ssss';
    }

}
