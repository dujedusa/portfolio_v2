import { FunctionComponent } from "react";
import { ROUTE } from "@shared/constants";

import {
  ABOUT_PARAGRAPH_1,
  ABOUT_PARAGRAPH_2,
  ABOUT_PARAGRAPH_3,
  ABOUT_TITLE,
} from "./index";
import "./about.scss";

const About: FunctionComponent = () => {
  return (
    <section className="about" id={ROUTE.about}>
      <div className="about-text">
        <h1 className="about__title">{ABOUT_TITLE}</h1>
        <p>{ABOUT_PARAGRAPH_1}</p>
        <p>{ABOUT_PARAGRAPH_2}</p>
        <p>{ABOUT_PARAGRAPH_3}</p>
      </div>
    </section>
  );
};

export default About;
