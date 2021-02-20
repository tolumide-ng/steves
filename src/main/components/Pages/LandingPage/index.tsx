import * as React from "react";
import { LandingLeft } from "../../UI/organims/LandingLeft";
import { LandingRight } from "../../UI/organims/LandingRight";
import "./index.css";

export const LandingPage = () => {
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                <article className="ldpg-left">
                    <LandingLeft />
                </article>
                <article className="ldpg-right">
                    <LandingRight />
                </article>
            </article>
        </article>
    );
};
