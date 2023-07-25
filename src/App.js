import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductLIst/ProductList';
import AddItem from './components/header/AddItem/AddItem';
import Header from './components/header/Header';

function App() {

  const [product, setProduct] = useState([]);

  const newProductHandler = (newItem) => {
    setProduct([...product, { ...newItem, id: Math.random() }]);
    console.log(newItem);
  }



  return (
    <div className="App">
      <Header />
      <AddItem newProduct={newProductHandler} />

      <ProductList productList={product} />
    </div>
  );
}

export default App;
