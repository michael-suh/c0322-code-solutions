var books = [
  {
    isbn: '123-123',
    title: 'hi',
    author: 'Michael'
  },

  {
    isbn: '234-234',
    title: 'hello',
    author: 'David'
  },

  {
    isbn: '345-345',
    title: 'bye',
    author: 'Eric'
  }
];

console.log('Book Info:', books);
console.log('type of books:', typeof books);

var booksJSON = JSON.stringify(books);
console.log('new type of books:', typeof booksJSON);

var student = '[{ "id": 7, "name": "Michael Suh" }]';
console.log('student:', student);
console.log('type of student:', typeof student);

var studentJSON = JSON.parse(student);
console.log('new type of student:', typeof studentJSON);
