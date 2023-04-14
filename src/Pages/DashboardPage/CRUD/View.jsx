import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../../Components/Header';
import './View.css';
import { getOneDrink } from '../../../api/auth';

function View() {
  const [drink] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getOneDrink(id);
    }
  }, [id]);

  return (
    <div>
      <Header />
      <div className="cardx">
        <div className="card-header">
          <p>Drink details</p>
        </div>
        <div className="containerz">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{drink && drink?.name}</span>
          <br />
          <br />
          <strong>Description: </strong>
          <span>{drink && drink.descripton}</span>
          <br />
          <br />
          <strong>ImageUrl: </strong>
          <span>{drink && drink.imageUrl}</span>
          <br />
          <br />
          <strong>Recipe: </strong>
          <span>{drink && drink.recipe}</span>
          <br />
          <br />
          <Link to="/homez">
            <button type="button" className="btnx btn-edit">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default View;
