import * as React from "react";
import cam from "../../../../assets/images/cam.svg";
import whatsapp from "../../../../assets/images/whatsapp.svg";
import collect from "../../../../assets/images/collect.svg";
import phone from "../../../../assets/images/phone.svg";
import location from "../../../../assets/images/location.svg";
import account from "../../../../assets/images/account.svg";
import cart from "../../../../assets/images/cart.svg";
import "./index.css";
import { Button } from "../../atoms/Button";

export const AppHeader = () => {
    const theIcons = [location, account, cart];
    return (
        <header className="apph">
            <nav className="apph-top">
                <ul className="apph-top-ul">
                    <li className="apph-top-li">
                        <a className="apph-top-a">
                            <img
                                src={cam}
                                alt="image showing a cam"
                                className="apph-top-img"
                            />
                            Book your virtual consultation now
                        </a>
                    </li>
                    <li className="apph-top-li">
                        <a className="apph-top-a">
                            <img
                                src={whatsapp}
                                alt="image showing a cam"
                                className="apph-top-img"
                            />
                            Contact A Specialist On WhatsApp
                        </a>
                    </li>
                    <li className="apph-top-li">
                        <a className="apph-top-a">
                            <img
                                src={collect}
                                alt="image showing a cam"
                                className="apph-top-img"
                            />
                            Click And Collect Now Available
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="apph-mid">
                <div className="apph-mid-lef">
                    <Button
                        buttonClass="apph-mid-button"
                        buttonText="Book A Consultation"
                    />

                    <a href="tel:+0800 080 3535">
                        <img src={phone} alt="icon of a phone" />
                        0800 080 3535
                    </a>
                </div>

                <div className="apph-mid-right">
                    <input className="apph-mid-input" type="text" />

                    <div className="apph-mid-icons">
                        {theIcons.map((icon, index) => (
                            <img
                                src={icon}
                                className="apph-mid-icons"
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <nav className="apph-bottom">
                <ul className="apph-ul">
                    <li className="apph-li">Diamonds</li>
                    <li className="apph-li">Engagement Rings</li>
                    <li className="apph-li">Wedding Rings</li>
                    <li className="apph-li">Eternity Rings</li>
                    <li className="apph-li">Jwellery</li>
                    <li className="apph-li">Bespoke</li>
                    <li className="apph-li">Learn</li>
                </ul>
            </nav>
        </header>
    );
};
