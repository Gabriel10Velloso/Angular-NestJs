import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { QuotesService } from 'src/services/quotes/quotes.service';
import { CreateQuoteDto } from 'src/dto/create-quote.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { Quote } from 'src/model/quotes.model';

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {

    constructor(private quotesService: QuotesService){}

    @Get()
    getQuotes(): Quote[] {
        return this.quotesService.getQuotes();
    }

    @ApiParam({name: 'id'})
    @Get(':id')
    getQuote(@Param('id') id): Quote {
        return this.quotesService.getQuote(id)
    }

    @Post()
    createQuote(@Body() createQuoteDto: CreateQuoteDto): Quote  {
      return this.quotesService.createQuote(createQuoteDto);
    }

    @ApiParam({name: 'id'})
    @Put(':id')
    updateQuote(@Param('id') id, @Body() updateQuoteDto: CreateQuoteDto): Quote  {
      return this.quotesService.updateQuote(id, updateQuoteDto);
    }

    @ApiParam({name: 'id'})
    @Delete(':id')
    deleteQuote(@Param('id') id): Quote  {
      return this.quotesService.deleteQuote(id);
    }

}
