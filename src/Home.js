import React from 'react';
import {useState} from 'react';

import {data} from './Data';
import Products from './Products';
import Buttons from './Buttons';

import './App.css';



function Home() {
  const [products, setProducts]= useState(data);
  
  const chosenProducts = (searchTerm) =>{
    const newProducts = data.filter(element => element.searchTerm === searchTerm);
    setProducts (newProducts);
  }

  return (
    <section className='section'>
     
      <div>
        <h2 className = 'title'> Free Standart Shipping</h2>
      </div>
      <div className='cont'>
        <Buttons filteredProducts = {chosenProducts}/>
        <button  className='filter' onClick = {() => setProducts(data)}>All products</button>
      </div>

        <Products itemForSale= {products}/>
     
    </section>
  );
}

export default Home;
