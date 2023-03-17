/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../context';
import './ExplorePage.css';

function Explore() {
  const { data } = useContext(MyContext);
  const [sideMenuData, setSideData] = React.useState([
    {
      title: 'Drinks',
      list: ['drink 1', 'drink 2', 'drink 3'],
      showList: false,
    },
    {
      title: 'Categories',
      list: ['category 1', 'category 2', 'category 3'],
      showList: false,
    },
    {
      title: 'Ingredients',
      list: ['ingre 1', 'ingre 2', 'ingre 3'],
      showList: false,
    },
    {
      title: 'Glass',
      list: ['glass 1', 'glass 2', 'glass 3'],
      showList: false,
    },
    {
      title: 'Is Alcoholic',
      list: ['Yes', 'No', 'Both'],
      showList: false,
    },
  ]);

  const toggleList = (index) => {
    const holder = sideMenuData;
    holder[index].showList = !holder[index].showList;
    setSideData(() => [...holder]);
  };

  return (
    <div className="main">
      <header className="header">
        <h1 className="header__h1">Drinks Available!!</h1>
      </header>
      <div className="drinks_display">
        {data.map((drinks) => {
          return (
            <div key={drinks.name} className="drink_card">
              <img src={drinks.src} alt="drinks" className="images" />
              <h2>{drinks.name}</h2>
              <p>{drinks.description}</p>
              <ul>
                <li>{drinks.ingredients}</li>
              </ul>
              <p>{drinks.userId}</p>
            </div>
          );
        })}
      </div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fa fa-bars" id="btn" />
        <i className="fa fa-times" id="cancel" />
      </label>
      <div className="sidebar">
        <header>Whiskey Sour</header>
        <ul>
          {sideMenuData.map(({ title, list, showList }, index) => (
            <li key={title}>
              <a href="#" onClick={() => toggleList(index)}>
                {title}
              </a>
              {showList &&
                list.map((item) => (
                  <label className="labz" htmlFor={item}>
                    <input
                      type={title !== 'Is Alcoholic' ? 'checkbox' : 'radio'}
                      name=""
                      id={item}
                    />
                    {item}
                  </label>
                ))}
            </li>
          ))}

          <div className="homez">
            <Link to="/">Home</Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Explore;
