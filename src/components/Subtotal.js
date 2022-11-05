import React, { useContext } from 'react'
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import context from '../context/context';
import getBasketTotal from '../selectors/getBasketTotal';
import { useHistory } from 'react-router';

function Subtotal() {
    const { state } = useContext(context);
    const history = useHistory();
    // const filtereSoapdArray = state.state.Basket.filter((item) =>
    // {
    //     if(item.offercode === 'soap')
    //     {
    //         return true;
    //     }
    // });


    // const filteredChocolateArray = state.state.Basket.filter((item) =>
    // {
    //     if(item.offercode === 'chocolate')
    //     {
    //         return true;
    //     }
    // });


    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({state.Basket.length} items):<strong>{ value }</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> 
                    This order contains a gift
                </small>

                <button
                onClick={(e) =>{
                    history.push('/payment')
                }}
                > Proceed to Checkout </button>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(state.Basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
        </div>
    )
}

export default Subtotal
