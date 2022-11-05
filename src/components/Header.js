import React,{useContext} from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import context from '../context/context';
import { auth } from '../firebase/firebase';


function Header() {
    const {state} = useContext(context);
    console.log(state);

    const handleAuthentication = () =>
    {
        if(state.User)
        {
            auth.signOut();
        }
    };

    return (
        <div className='header'>
            <Link to="/">
                <img 
                className="header__logo" 
                src="/images/amazon1.png"
                alt="amazon"
                />
            </Link>
            <div className="header__search">
                <input 
                type="text"
                className="header__searchInput" 
                />
                <SearchIcon
                 className="header__searchIcon"
                />

            </div>
            <div className="header__nav">
                <Link to = {!state.User && "/login"} >
                <div 
                onClick={handleAuthentication}
                className="header__option"
                >
                   <span className="header__optionLineOne">
                       Hello <br />
                       <span className="header__userName">{!state.User? 'Guest': state.User.email}</span>
                   </span>
                   <span className="header__optionLineTwo">
                      {state.User ? 'Sign Out':'Sign In'}
                   </span>
                </div>
                </Link>
                <Link to="/orders">
                <div className="header__option">
                    <span className="header__optionLineOne">
                       Returns
                    </span>
                   <span className="header__optionLineTwo">
                      & Orders
                   </span>
                </div>
                </Link>   
                <div className="header__option">
                    <span className="header__optionLineOne">
                       Your
                    </span>
                    <span className="header__optionLineTwo">
                     Prime
                    </span>
                </div>
                <Link to="/checkout">   
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span
                        className="header__optionLineTwo header__basketCount"
                        >
                            { state.Basket.length}
                        </span>
                    </div>   
                </Link>             
            </div>

        </div>
    )
}

export default Header
