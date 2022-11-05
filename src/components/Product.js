import React, { useContext } from 'react';
import '../css/Product.css';
import context from '../context/context';

function Product({id,offercode,title,price,image,rating,children}) {
    const {dispatch} = useContext(context);

    const addToBasket = () =>
    {
        console.log('logged')
        //dispatch item 
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                offercode:offercode,
                title:title,
                price:price,
                image:image,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p style={{color:'orange',fontFamily:'cursive'}}>{children}</p>
                <p> {title} </p>
                <p className="product__price">
                    <small><b>₹</b></small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(() =>
                    {
                        return (
                            <p>⭐</p>
                        )
                    })}
                </div>
            </div>

            <img 
            src={image}
            alt="product image"
             />
            <button
            onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
