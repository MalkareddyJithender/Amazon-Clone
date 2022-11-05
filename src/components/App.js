import React,{useEffect, useReducer}from 'react';
import '../css/App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
import reducer,{ initialState } from '../reducers/reducer';
import context from '../context/context';
import Login from './Login';
import { auth } from '../firebase/firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders'; 

const promise = loadStripe("pk_test_51Ips86SBiMWz47PPAb87oLk6vrQTmyyDGx8SqTXtobhNarzL5TRX9iwynx8uAj8DonzHj5fyfbIHGfeGpMenWfTH00AlQjNUqa");

function App() {
  const [state,dispatch] = useReducer(reducer,initialState);

  useEffect(() =>
  {
    auth.onAuthStateChanged((authUser) =>
    {
      if(authUser)
      {
        //dispatching an action when user creates,loginned,refreshing page.
        dispatch({
          type:'SET_USER',
          user:authUser
        });
      }

      else
      {
        //dispatching an action when the user is logged out.
        dispatch({
          type:'SET_USER',
          user:null
        });
      }
    })
  },[])

  return (
    <BrowserRouter>
    <context.Provider value={{state:state,dispatch:dispatch}}>
      <div className="App">
        <Switch>
          <Route path="/login" exact={true} >
            <Login />
          </Route>
          <Route path="/checkout" exact={true} >
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment" exact={true} >
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders" exact={true} >
            <Header />
            <Orders />
          </Route>
          <Route path="/" exact={true} >
            <Header /> 
            <Home />
          </Route>
        </Switch>
      </div>
      </context.Provider>
    </BrowserRouter>  
  );
}

export default App;
