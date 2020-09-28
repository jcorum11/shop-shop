import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart'
import {useSelector} from "react-redux"

const Home = () => {
  console.log(useSelector(state=>state)); 
  return (
    <div className="container">
      <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
