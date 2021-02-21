import * as React from "react";
import { Button } from "../../atoms/Button";
import arrowDown from "../../../../assets/images/buttonArrow.svg";
import goldPick from "../../../../assets/images/goldPick.svg";
import roundHercules from "../../../../assets/images/roundHercul.svg";
import three60 from "../../../../assets/images/360.png";
import first from "../../../../assets/images/first.png";
import second from "../../../../assets/images/second.png";
import third from "../../../../assets/images/third.png";
import fourth from "../../../../assets/images/fourth.jpeg";
import fifth from "../../../../assets/images/fifth.png";
import sixth from "../../../../assets/images/sixth.jpeg";
import seventh from "../../../../assets/images/seventh.jpeg";
import eigth from "../../../../assets/images/eigth.jpeg";
import last from "../../../../assets/images/last.svg";
import mainImg from "../../../../assets/images/mainimg.jpeg";

import "./index.css";

export const Gallery = () => {
    const theImages = [
        three60,
        first,
        second,
        third,
        fourth,
        fifth,
        sixth,
        seventh,
        eigth,
        last,
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const mainImageRef = React.useRef<HTMLUListElement>(null);

    const handleChangeImage = (index: number) => {
        Array.from(mainImageRef?.current?.children ?? []).forEach(
            (elem, currIndex) => {
                if (
                    elem.classList.contains("is-showing") &&
                    currIndex !== index
                ) {
                    // if(currIndex < index)
                    elem.classList.add("animate-out");

                    setTimeout(() => {
                        elem.classList.remove("is-showing");
                        elem.classList.remove("animate-out");
                    }, 200);
                }

                if (
                    currIndex === index &&
                    !elem.classList.contains("is-showing")
                ) {
                    elem.classList.add("is-showing");
                }

                setCurrentIndex(index);
            }
        );
    };

    return (
        <section className="theg">
            <div className="theg-top">
                <ul className="theg-ul" ref={mainImageRef}>
                    {theImages.map((image, index) => (
                        <li
                            className={`theg-mainimg ${
                                index === 0 ? "is-showing" : ""
                            }`}
                            key={index}
                        >
                            {index === 0 ? (
                                <div className="theg-mainimg-cont">
                                    <img
                                        src={mainImg}
                                        alt=""
                                        className="theg-theimg"
                                    />
                                    <p className="theg-mainimg-text">
                                        Steven Stone Engraving for illustration
                                        purposes only.
                                        <br />
                                        <span className="theg-red">
                                            New:
                                        </span>{" "}
                                        You can now choose your own engraving
                                    </p>
                                </div>
                            ) : (
                                <img
                                    src={image}
                                    alt=""
                                    className="theg-theimg"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="theg-mid">
                <Button
                    buttonClass="theg-button"
                    buttonText=""
                    buttonJsx={
                        <div className="theg-buttoncont">
                            <div className="theg-buttoncont--left">
                                <p className="theg-buttoncont--text">Metal</p>
                            </div>
                            <div className="theg-buttoncont--right">
                                <p className="theg-buttoncont--text theg-buttoncont--light">
                                    Yellow Gold
                                </p>
                                <img
                                    className="theg-buttoncont-circle theg-gold-circle"
                                    src={goldPick}
                                    alt="choose color type"
                                />
                                <img
                                    className="theg-buttoncont-img"
                                    src={arrowDown}
                                    alt="choose color type"
                                />
                            </div>
                        </div>
                    }
                />

                <Button
                    buttonClass="theg-button"
                    buttonText=""
                    buttonJsx={
                        <div className="theg-buttoncont">
                            <div className="theg-buttoncont--left">
                                <p className="theg-buttoncont--text">
                                    Diamond Shape
                                </p>
                            </div>
                            <div className="theg-buttoncont--right">
                                <p className="theg-buttoncont--text theg-buttoncont--light">
                                    Yellow Gold
                                </p>
                                <img
                                    className="theg-buttoncont-circle"
                                    src={roundHercules}
                                    alt="choose color type"
                                />
                                <img
                                    className="theg-buttoncont-img"
                                    src={arrowDown}
                                    alt="choose color type"
                                />
                            </div>
                        </div>
                    }
                />
            </div>
            <ul className="theg-bottom">
                {theImages.map((image, index) => (
                    <li
                        className={
                            index === currentIndex
                                ? "theg-thumbnail theg-thumbnail-active"
                                : "theg-thumbnail"
                        }
                        key={index}
                        onClick={() => handleChangeImage(index)}
                    >
                        <img
                            src={image}
                            alt={`image ${index}`}
                            className="theg-thumbnail--img"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
