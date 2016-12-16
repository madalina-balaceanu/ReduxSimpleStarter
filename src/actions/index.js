export function selectBook(book) {
  console.log("Been there");
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}