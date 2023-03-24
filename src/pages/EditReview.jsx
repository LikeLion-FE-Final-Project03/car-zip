import React, { useEffect, useInsertionEffect, useState } from 'react';
import { useLocation } from 'react-router';

const EditReview = ({}) => {
  // const [isEdit, setIsEdit] = useState(false);

  const location = useLocation();
  const { userId } = location.state;

  console.log('userId : ', userId);

  return (
    <>
      <h2>edit</h2>
      <h2>작성자 : {userId}</h2>
    </>
  );
};

export default EditReview;
