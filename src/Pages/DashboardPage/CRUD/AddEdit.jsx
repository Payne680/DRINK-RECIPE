/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../../Components/Header';
import './AddEdit.css';

const initialState = {
  name: '',
  description: '',
  imageUrl: '',
  recipe: '',
};

function AddEdith() {
  const [state, setState] = useState(initialState);

  const { name, description, imageUrl, recipe } = initialState;

  const navigate = useNavigate();

  const addDesc = async (data) => {
    const res = await axios.post('http://localhost:3000/drink', data);
    if (res.status === 200) {
      toast.success(res.data);
    }
  };

  const handleSubmit = (e) => {
    if (!name || !description || !imageUrl || !recipe) {
      toast.error('Please provide values into each input field');
    } else {
      e.preventDefault();
      addDesc(state);
      setTimeout(() => navigate('/homez'));
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
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
            onChange={handleInputChange}
            value={name}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            required
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="decription"
            name="description"
            placeholder="Enter your decription...."
            onChange={handleInputChange}
            value={description}
          />
          <label htmlFor="imageUrl">ImageUrl</label>
          <input
            type="text"
            id="imageUrl"
            name="image"
            placeholder="Insert your imageUrl...."
            onChange={handleInputChange}
            value={imageUrl}
          />
          <label htmlFor="recipe">Recipe</label>
          <input
            type="text"
            id="recipe"
            name="recipe"
            placeholder="Enter your Recipe...."
            onChange={handleInputChange}
            value={recipe}
          />
          <input type="Submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default AddEdith;
