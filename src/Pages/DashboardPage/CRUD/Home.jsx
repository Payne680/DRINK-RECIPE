import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../../Components/Header';
import { deleteDrink } from '../../../api/auth';

function Home() {
  const [data, setData] = useState([]);

  const getDrinks = async () => {
    const res = await axios.get('http://localhost:3000/drinks');
    if (res.status === 200) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getDrinks();
    deleteDrink();
  }, []);

  return (
    <div className="">
      <Header />
      <div style={{ marginTop: '30px' }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>No.</th>
              <th style={{ textAlign: 'center' }}>Name</th>
              <th style={{ textAlign: 'center' }}>Description</th>
              <th style={{ textAlign: 'center' }}>Image_Url</th>
              <th style={{ textAlign: 'center' }}>Recipe</th>
              <th style={{ textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.imageUrl}</td>
                    <td>{item.recipe}</td>
                    <td>
                      <Link to={`/update/${item.id}`}>
                        <button type="button" className="btn1 btn1-edit">
                          Edit
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn1 btn1-delete"
                        onClick={() => deleteDrink(item.id)}
                      >
                        Delete
                      </button>
                      <Link to={`/view/${item.id}`}>
                        <button type="button" className="btn1 btn1-view">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
