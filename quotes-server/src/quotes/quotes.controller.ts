import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuotesService } from 'src/services/quotes/quotes.service';
import { CreateQuoteDto } from 'src/dto/create-quote.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {

    constructor(private quotesService: QuotesService){}

    @Get()
    getQuotes(): string {
        return this.quotesService.getQuotes();
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getQuote(@Param('id') id) {
        return this.quotesService.getQuote(id)
    }

    @Post()
    createQuotes(@Body() createQuoteDto: CreateQuoteDto): any  {
      return this.quotesService.createQuotes(createQuoteDto);
    }

}
