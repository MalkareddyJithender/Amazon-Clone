import React, { useEffect,useContext, useState } from 'react'
import '../css/Orders.css';
import { db } from '../firebase/firebase';
import context from '../context/context';
import Order from './Order';

function Orders() {
    const {state} = useContext(context);
    const [orders,setOrders] = useState([]);

    useEffect(() =>
    {
        if(state.User)
        {
           db
            .collection('users')
            .doc(state.User.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot((snapshot) =>
            {
              setOrders(snapshot.docs.map((doc) =>
              {
                  return {
                      id:doc.id,
                      data:doc.data()
                  }
              }));
            })
        }
        else
        {
            setOrders([]);
        }

    },[state.User]);
    console.log('comp');
    return (
        <div className="orders">
            <h1> Your Orders </h1>
            <div className="orders__order">
                {orders?.map((order) =>
                {
                    return <Order order={order} />
                })}
            </div>
        </div>
    )
}

export default Orders;
