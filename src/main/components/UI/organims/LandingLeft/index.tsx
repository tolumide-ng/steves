import * as React from "react";
import goTo from "../../../../assets/images/gotoArrow.svg";
import { Button } from "../../atoms/Button";
import { Gallery } from "../Gallery";
import "./index.css";

export const LandingLeft = () => {
    return (
        <article className="gall">
            <article className="gall-inner">
                <Button
                    buttonText=""
                    buttonImg={goTo}
                    buttonClass="gall-back"
                    buttonImgClass=""
                />
                <div className="gall-gal">
                    <Gallery />
                </div>
            </article>
        </article>
    );
};
