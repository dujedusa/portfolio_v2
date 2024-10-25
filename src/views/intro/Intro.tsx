import { FunctionComponent } from "react";
import { Button } from "@components/button";
import { CV_FILENAME, CV_PATH, IMAGE_PATH, ROUTE } from "@shared/constants";
import { downloadDocument } from "@utils";

import { INTRO_TEXT } from "./index";
import "./intro.scss";

const Intro: FunctionComponent = () => {
  return (
    <section className="intro" id={ROUTE.intro}>
      <div className="intro__wrapper">
        <div className="intro-text">
          <h3>{INTRO_TEXT.greetings}</h3>
          <p>
            <span dangerouslySetInnerHTML={{ __html: INTRO_TEXT.name }}></span>
            <span>{INTRO_TEXT.job}</span>
            <span>{INTRO_TEXT.hobby}</span>
          </p>
          <Button
            label="Download CV"
            onClick={() => downloadDocument(CV_PATH, CV_FILENAME)}
          />
        </div>
        <div className="intro-photo">
          <img src={IMAGE_PATH.profile} alt="Author" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
