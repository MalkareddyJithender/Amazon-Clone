import React, { useContext } from 'react';
import context from '../context/context';
import '../css/CheckoutProduct.css';

function CheckoutProduct({id,title,image,price,rating,hideButton,clickHandler,clickHandlerBoolean}) {
    const {state,dispatch} = useContext(context);

    const removeFromBasket = () =>
    {
        //dispatching an action to store(context object)
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        });
        if(clickHandlerBoolean)
        {
            clickHandler();
        }
    }
    return (
        <div className="checkoutProduct">
                <img 
                src={`${image}`}
                className="checkoutProduct__image"
                />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    { title }
                </p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{ price }</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                    Array(rating)
                    .fill()
                    .map(() =>
                    {
                        return <p>⭐</p>
                    })
                    }
                </div>
                {!hideButton && <button
                onClick={removeFromBasket}
                >Remove from Basket</button>}
            </div>
        </div>
    )
}

export default CheckoutProduct
