import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../stateProvider/stateProvider';
import './Header.css';
import { auth } from '../../config/firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (auth) {
            auth.signOut();
        }
    };

    return (
        <div className="header">
            <Link to="/home" >
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="|" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />

                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user ? '/login' : "#"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">{user ? user.email : "Hello Guest"}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to={!user ? '/login' : "/home"}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket.length || 0}</span>
                    </div>
                </Link>
            </div>

        </div>


    );
}

export default Header;
