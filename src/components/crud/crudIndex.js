import React from "react";
import { Link } from 'react-router';

import './crudIndex.scss';

import autoPic from '../../img/crud/auto.png';
import itemPic from '../../img/crud/book.png';
import homePic from '../../img/crud/home.png';


class CrudIndex extends React.Component{
	render(){
		return(
		  <div className="crudIndex">		  	
		  	<div>
		  	  <Link to="/crud/marks">
		  	    <h1>Автомобили</h1>
		  	    <img src={autoPic}/>
		  	  </Link>
		  	  <Link to="crud/addAuto">
		  	  	<button>Добавить авто</button>
		  	  </Link>
		    </div>
		    <div>
		      <Link to="crud/itemsCrud">
		  	    <h1>Статьи</h1>
		  	    <img src={itemPic}/>
		  	  </Link>
		  	  <Link to="crud/addItems">
		  	  	<button>Добавить статью</button>
		  	  </Link>
		  	</div>
		  	<div>
		  	  <Link to="/crud/home">
		  	    <h1>Главная страница</h1>
		  	    <img src={homePic}/>
		  	    <button>Редактировать статью</button>
		  	  </Link>
		  	</div>
		  	<div>
		  	  <Link to="/crud/about">
		  	    <h1>О сайте</h1>
		  	    <img src={homePic}/>
		  	    <button>Редактировать вкладку о сайте</button>
		  	  </Link>
		  	</div>
		  </div>
		);
	}
}

export default CrudIndex;