import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): any {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBookById(@Param() param: {id: string}): any {
    return this.bookService.getBookById(param.id);
  }
}
