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
                    title="The lean startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                    rating={5} />
                <Product
                    id="qwe"
                    title="Kenwood Kmix Stand Mixer"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61gCBYR5G7L._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="dfg"
                    title="Kenwood Kmix Stand Mixer"
                    price={239.0}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41TR7G8VboL._AC_US160_FMwebp_QL70_.jpg"
                />
                <Product
                    id="xcv"
                    title="Kenwood Kmix Stand Mixer"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY218_.jpg"
                />
                <Product
                    id="qwe"
                    title="Kenwood Kmix Stand Mixer"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61ZhiGSzb7L._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="asd"
                    title="Kenwood Kmix Stand Mixer"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355.jpg"
                />
            </div>

        </div >
    );
}

export default Home;
