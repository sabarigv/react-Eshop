import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import CartItem from "./CartItem";
import { useState } from "react";
function App() {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: 'OnePlus Nord-2',
      price: 38000
    },
    {
      id: 2,
      title: 'Poco M2',
      price: 12000
    },
    {
      id: 3,
      title: 'Google Pixel 6',
      price: 41500
    },
    {
      id: 4,
      title: 'Samsung Galaxy Z Flip',
      price: 49999
    },
    {
      id: 5,
      title: 'Apple iphone 13',
      price: 67900
    },
    {
      id: 6,
      title: 'Vivo X80',
      price: 80000
    },
    {
      id: 7,
      title: 'iQOO Z6 44W',
      price: 17000
    },
    {
      id: 8,
      title: 'Redmi Note-5 Pro',
      price: 15000
    },
  ])

  const [cartitems, setCartItem] = useState([])
  const [total, setTotal] = useState(0)

  let handleAddToCart = (id) => {
    const productIndex = products.findIndex(obj => obj.id === id)
    const product = products[productIndex]
    setCartItem([...cartitems, product])
    setTotal(total + product.price)
  };

  let handleRemoveCart = (id) => {
    const cartItemIndex = cartitems.findIndex(obj => obj.id === id)
    setTotal(total - cartitems[cartItemIndex].price)
    cartitems.splice(cartItemIndex, 1)
    setCartItem([...cartitems])
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Products</h1>
            </div>
          </div>
          <div className='row'>
            {
              products.map((product) => {
                return <Card cartitems={cartitems} data={product} handleAddToCart={handleAddToCart} />
              })
            }
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Cart</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <ol class="list-group list-group-numbered">
                {
                  cartitems.map((item) => {
                    return <CartItem data={item} handleRemoveCart={handleRemoveCart} />;
                  })
                }
              </ol>
              <h1>Total : {total}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
