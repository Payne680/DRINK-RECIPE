/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Components/Header';
import './AddEdit.css';
import { addContent } from '../../../api/auth';

function AddEdith() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      name: target.name.value,
      description: target.description.value,
      imageUrl: target.imageUrl.value,
      recipe: target.recipe.value,
    };

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
          <textarea
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
          <textarea
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
