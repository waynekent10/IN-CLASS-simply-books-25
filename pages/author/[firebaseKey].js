/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import AuthorCard from '../../components/AuthorCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;
  const viewAuthorBooks = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);
  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column" />
        <div className="text-white ms-5 details">
          <h5>
            {authorDetails.first_name} by {authorDetails.last_name}
            {authorDetails.favorite ? '🤍' : ''}
          </h5>
          Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {authorDetails.books?.map((book) => (
          <AuthorCard key={book.firebaseKey} bookObj={book} onUpdate={viewAuthorBooks} />
        ))}
      </div>
    </>
  );
}
