import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

  allBooks = [
    { id: '1', name: 'first', price: 200 },
    { id: '2', name: 'second', price: 90 },
    { id: '3', name: 'third', price: 160 },
  ]
  
  getBooks() {
    return this.allBooks
  }

  getBookById(id: string) {
    return this.allBooks.filter((book) => book.id === id)
  }
} 
