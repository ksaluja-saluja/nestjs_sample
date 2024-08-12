import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BooksService } from './books.service';
import { ResponseBuilder } from 'src/adapters/response-builder';

@Controller('books')
@UseInterceptors(ResponseBuilder)
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): any {
    return this.bookService.getBooks()
  }

  @Get(':id')
  getBookById(@Param() param: {id: string}): any {
    return this.bookService.getBookById(param.id);
  }
}
