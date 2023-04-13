import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import Header from '../../../Components/Header';

function View() {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getOneDrink(id);
    }
  }, [id]);
  return (
    <div>
      <Header />
      <div></div>
    </div>
  );
}

export default View;
