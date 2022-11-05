import React,{ useContext,useEffect,useState } from 'react';
import '../css/Payment.css';
import context from '../context/context';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import getBasketTotal from '../selectors/getBasketTotal';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios/axios';
import { db } from '../firebase/firebase';


function Payment() {
    const history = useHistory();
    const {state,dispatch} = useContext(context);
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [processing,setProcessing] = useState("");
    const [succeeded,setSucceeded] = useState(false);
    const [clientSecret,setClientSecret] = useState(true);


    useEffect(() =>
    {
        //we generate the special stripe secret which allows us to charge for a customer
        const getClientSecret = async () =>
        {
           const response = await axios({
                method:'post',
                //stripe expects total in currency subunits(paisa's).
                url:`/payments/create?total=${getBasketTotal(state.Basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
        // console.log('The client secret is >>>>>>>',clientSecret)
     },[state?.Basket]);

    const handleSubmit =  (event) =>
    {
        event.preventDefault();
        setProcessing(true);
       
        stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>
        {
            //paymentIntent = payment confirmation
            db
             .collection('users')
             .doc(state.User?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                 basket:state.Basket,
                 amount:paymentIntent.amount,
                 created:paymentIntent.created
             })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            });

            history.replace('/orders');
        }).catch((error) =>
        {
            alert(error);
        })

    };
    const handleChange = (event) =>
    {
        //we are setting disabled,error values after user typed in the card
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    // console.log(clientSecret)
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (
                    <Link to="/checkout">{state.Basket.length} items</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{state.User?.email}</p>
                        <p>Nizamabad,Telangana</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {state.Basket.map((item) =>
                        {
                          return  <CheckoutProduct 
                             id={item.id}
                             title={item.title}
                             price={item.price}
                             rating={item.rating}
                             image={item.image}
                             clickHandlerBoolean={false}
                             />
                        })}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe magic will go here...*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                 renderText={(value) =>(
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                 )}
                                 decimalScale={2}
                                 value={getBasketTotal(state.Basket)}
                                 displayType={"text"}
                                 thousandSeparator={true}
                                 prefix={"₹"}
                                />
                                <button
                                 disabled={processing || disabled || succeeded}
                                >
                                    <span>
                                        {processing ? <p>Processing</p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
