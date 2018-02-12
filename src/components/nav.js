import React from 'react';
import { Link } from 'react-router';

import marksDb from "./redux/db/marksDb"
import './nav.scss';

class Nav extends React.Component {

  getNameCars(cars){
    var nameCars = cars.marksData.map((car) => 
      <li key={car.mark}>
        <Link to={`/marks/${car.mark}`}>
          {car.mark}
        </Link>
      </li>);
    return nameCars;
  }

  render() {
    return (
      <div className="nav">
        <div className="homeHeaderbar">
          <h1 className="title">Сайт об автомобилях!!!</h1>
          <div className="homeHeaderImg">
            <div id="img1"></div>
            <div id="img2"></div>
            <div id="img3"></div>
            <div id="img4"></div>
            <div id="img5"></div>
            <div id="img6"></div>
            <div id="img7"></div>
            <div id="img8"></div>
          </div>

          <div id="navHeaderMenu2">
            <nav id="menu2">
              <p>Меню</p>
              <ul>
                <li><Link to="/">Главная</Link></li>
                <li className="submenu2"><Link to="/marks">Марки авто</Link>
                  <ul >
                    {this.getNameCars(marksDb)}
                  </ul>
                </li>
                <li><Link to="/items">Статьи об автомобилях</Link></li>
                <li><Link to="/crud">Добавить редактировать</Link></li>
                <li><Link to="/about">О сайте</Link></li>
              </ul>
            </nav>
          </div>

          <div id="navHeaderMenu">
            <nav id="menu1">
              <ul>
                <li><Link to="/">Главная</Link></li>
                <li className="submenu"><Link to="/marks">Марки авто</Link>
                  <ul >
                    {this.getNameCars(marksDb)}
                  </ul>
                </li>
                <li><Link to="/items">Статьи об автомобилях</Link></li>
                <li><Link to="/crud">Добавить редактировать</Link></li>
                <li><Link to="/about">О сайте</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="navBottom">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Nav ; 