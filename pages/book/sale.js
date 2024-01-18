import React, { useEffect, useState } from 'react';
import { booksOnSale } from '../../api/bookData';
import { useAuth } from '../../utils/context/authContext';
import BookCard from '../../components/BookCard';

export default function BooksOnSale() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  const getBooksOnSale = () => {
    booksOnSale(user.uid).then(setBooks);
  };
  useEffect(() => {
    getBooksOnSale();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.firebaseKey} bookObj={books} onUpdate={getBooksOnSale} />
      ))}
    </div>
  );
}
