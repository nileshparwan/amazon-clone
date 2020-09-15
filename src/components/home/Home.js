import React from 'react';
import './Home.css';
import Product from '../product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container" >
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
            </div>

            <div className="home__row">
                <Product
                    id="lk"
                    title="Xcentz iPhone Charger 10ft, MFi Certified Lightning Cable, Braided Nylon High-Speed iPhone Cable with Premium Metal Connector for iPhone 11/X/XS/XR/XS Max/8/7/6/5S/SE, iPad Pro/Mini/Air, Blue"
                    price={16.49}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    rating={5} />
                <Product
                    id="qwe"
                    title="AmazonBasics Portable Wireless, 2.1 Bluetooth Speaker, Black"
                    price={30.78}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-230DA9039F21E515._V535729156_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="dfg"
                    title="Samsung Galaxy A20S w/Triple Cameras (32GB, 3GB RAM) 6.5 Display, Snapdragon 450, 4000mAh Battery, US & Global 4G LTE GSM Unlocked A207M/DS - International Model (Blue, 32GB + 64GB SD Bundle)"
                    price={176.83}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41TR7G8VboL._AC_US160_FMwebp_QL70_.jpg"
                />

                <Product
                    id="xcv"
                    title="Google - Pixel 3a with 64GB Memory Cell Phone (Unlocked) - Just Black"
                    price={443.20}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY218_.jpg"
                />

                <Product
                    id="qwe"
                    title="BLU Advance A4 2019- Unlocked Dual Sim, 16GB -Black"
                    price={39.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61ZhiGSzb7L._AC_UY218_.jpg"
                />

            </div>

            <div className="home__row">
                <Product
                    id="asd"
                    title="Samsung QN32Q50RAFXZA Flat 32'' QLED 4K 32Q50 Series Smart TV"
                    price={447.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355.jpg"
                />
            </div>
        </div >
    );
}

export default Home;
