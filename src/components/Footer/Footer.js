import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import './Footer.css';
import { title, footerOne, footerTwo, footerThree } from './Footer.json';


const FooterMoveTop = ({ title }) => (
    <div className="footer__row footer__moveToTop" onClick={() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })}>
        <span>{title}</span>
    </div>
);

const FooterSectionOne = ({ item }) => {
    return (
        <div className="footer__row footer__middle">
            <div className="footer__middle__row">
                {
                    item.map((item, index) => (
                        <div className="footer__middle__col" key={index}>
                            <p>{item?.title}</p>
                            <ul>
                                {
                                    item?.item.map((element, key) => (
                                        <li key={key}>
                                            <a href={element.url || ""}>
                                                {element?.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const FooterSectionTwo = ({ item }) => {
    return (
        <div className="footer__row footerSectionTwo">
            <div className="footerSectionTwo__col">
                <img src={item.image?.url} alt={item?.image.description} />
                <div className="footerSectionTwo__btn">
                    <Dropdown description={item?.language?.description} language={item?.language?.language} />
                    <a href={item?.moneyType?.url}>{item?.moneyType?.title}</a>
                    <a href={item?.country?.url}>{item?.country?.name}</a>
                </div>
            </div>
        </div>
    );
};

const FooterSectionThree = ({ item }) => (
    <div className="footer__row footerSectionThree">
        <div className="footerSectionThree__row">
            {
                item.map((parentElement, parentIndex) => (
                    <div className="footerSectionThree__col" key={parentIndex}>
                        {
                            parentElement?.map((childElement, childIndex) => (
                                <a key={childIndex} href={childElement?.url}>
                                    <strong>{childElement?.title}</strong>
                                    <small>{childElement?.subtitle}</small>
                                </a>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    </div>
);

function Footer() {

    return (
        <div className="footer">
            <FooterMoveTop title={title} />
            <FooterSectionOne item={footerOne} />
            <FooterSectionTwo item={footerTwo} />
            <FooterSectionThree item={footerThree} />
        </div>
    );
}

export default Footer;
