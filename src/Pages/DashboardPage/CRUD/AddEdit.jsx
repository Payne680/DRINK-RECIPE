/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../Components/Header';
import './AddEdit.css';
import { addContent, getOneDrink, updateDetails } from '../../../api/auth';

function AddEdith() {
  const navigate = useNavigate();
  const [state] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getOneDrink(id);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      name: target.name.value,
      description: target.description.value,
      imageUrl: target.imageUrl.value,
      recipe: target.recipe.value,
    };
    if (!id) {
      addContent(state);
    } else {
      updateDetails(state, id);
    }

    e.preventDefault();
    await addContent(data);
    navigate('/homez');
  };

  return (
    <div className="addedit">
      <Header />
      <div style={{ marginTop: '50px' }}>
        <form
          style={{
            margin: 'auto',
            padding: '15px',
            maxWidth: '400px',
            alignContent: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name...."
            required
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="decription"
            name="description"
            placeholder="Enter your decription...."
            required
          />
          <label htmlFor="imageUrl">ImageUrl</label>
          <input
            type="text"
            id="imageUrl"
            name="image"
            placeholder="Insert your imageUrl...."
            required
          />
          <label htmlFor="recipe">Recipe</label>
          <input
            type="text"
            id="recipe"
            name="recipe"
            placeholder="Enter your Recipe...."
            required
          />
          <button className="btnx" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEdith;
