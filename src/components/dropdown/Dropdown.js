import React from 'react';
import "./Dropdown.css";

function Dropdown({ title, description, language }) {
    return (
        <div class="dropup">
            <button class="dropbtn">{language[0]?.title || title}</button>
            <div class="dropup-content">
                <div className="dropup-content-row">
                    <div className="dropup-arrow" />
                    <p>{description}</p>
                    {
                        language.map((item, index) => (
                            <a key={index} href={item.url || "#"}>
                                {item.title}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
