import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import Product from './Product'
import './Home.css'

import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" />
            <div className="home__row">
                <Product
                    id="12314"
                    title="The Lean Startup: How Constant Innovation"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
                <Product
                    id="12314"
                    title="Amazon Basics Classic TV Dinner Folding Trays with Storage Rack"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
                <Product
                    id="12314"
                    title="The Lean Startup: How Constant Innovation"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
                
            </div>
            <div className="home__row">
                <Product
                    id="12314"
                    title="The Lean Startup: How Constant Innovation"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
                <Product
                    id="12314"
                    title="Amazon Basics Classic TV Dinner Folding Trays with Storage Rack"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
                <Product
                    id="12314"
                    title="The Lean Startup: How Constant Innovation"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
                <Product
                    id="12314"
                    title="Amazon Basics Classic TV Dinner Folding Trays with Storage Rack"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
                
            </div>
            <div className="home__row">
            <Product
                    id="12314"
                    title="The Lean Startup: How Constant Innovation"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
                <Product
                    id="12314"
                    title="Amazon Basics Classic TV Dinner Folding Trays with Storage Rack"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81yiAYZzIlL._AC_SX679_.jpg" 
                />
            </div>  

        </div>
    )
}

export default Home