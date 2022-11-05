import React, { useContext } from 'react';
import '../css/Checkout.css';
import context from '../context/context';
import Subtotal from './Subtotal';
import Shuffle from './Shuffle';

function Checkout() {
    const { state } = useContext(context);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__add"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="amazon add"
                />
                <h2>hello&nbsp;
                    <span className="checkout__username">
                        {!state.User? 'Guest' : state.User.email}
                    </span>
                </h2>
                <h1 className="checkout__title">Your Shopping Basket:</h1>
                <Shuffle 
                 basket={state.Basket}
                />
                {/* {
                    state.Basket
                    .map((item) =>
                    {
                        return <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    })
                } */}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
