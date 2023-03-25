/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './ExplorePage.css';

function Explore() {
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
    <div className="cords">
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
      <div className="cards">
        <div className="card">
          {/* <img className="img" src={pancake} alt="pancake" /> */}
          <h5>Whiskey</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
        <div className="card">
          {/* <img className="img" src={pancake} alt="pancake" /> */}
          <h5>Pancake</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
        <div className="card">
          {/* <img className="img" src={pancake} alt="pancake" /> */}
          <h5>Pancake</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
        <div className="card">
          {/* <img className="img" src={pancake} alt="pancake" /> */}
          <h5>Pancake</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
        <div className="card">
          {/* <img className="img" src={pancake} alt="pancake" /> */}
          <h5>Pancake</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
        <div className="card">
          {/* <img className="img" src={pancake} alt="pancake" /> */}
          <h5>Pancake</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
        <div className="card">
          {/* <img className="img" src={pancake} alt="pancake" /> */}
          <h5>Pancake</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
        <div className="card">
          {/* <img className="img" src={pancake} alt="pancake" /> */}
          <h5>Pancake</h5>
          <p>Click for more details</p>
          <button className="desc" type="button">
            More details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
