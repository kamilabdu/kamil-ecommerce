import React from 'react';
import './Checkout.css';
import Header from './Header';
import SubTotal from './Subtotal';
import { useStateValue } from './StateProvider';
import ProductCart from './ProductCart';


function Checkout() {
    const [{basket}] = useStateValue();
    
  return (
    <div>
        <Header/>
        <div className="checkout">
            <div className="checkout__left">
              {
                  basket.length === 0 ? (
                    <div>
                      <h2 className="checkout__title">Your Shopping Basket is empty</h2>
                      <p>You have no items in your basket. Buy one.</p>
                    </div>
                  ) : (
                    <div>
                      <h2 className="cshoppingbaskettitle">Items in the Shopping Basket</h2>
                      {
                        basket.map(item => (
                            <ProductCart
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                        }
                    </div>
                  )
              }
                  
              </div>
              {
                  basket.length > 0 && (
                    <div className="checkout__right">
                      <SubTotal/>
                    </div>
                  )
              }
              
        </div>
    </div>
  );
}

export default Checkout;



        
    

