import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { favoriteAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';

export default function FavoriteAuthors() {
  const { user } = useAuth();
  const [authors, setAuthors] = useState([]);

  const getAllFavAuthors = () => {
    favoriteAuthors(user.uid).then(setAuthors);
  };
  useEffect(() => {
    getAllFavAuthors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllFavAuthors} />
      ))}
    </div>
  );
}
