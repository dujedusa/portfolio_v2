import { FunctionComponent } from "react";
import { ICON_PATH, ROUTE } from "@shared/constants";

import { TESTIMONIALS__INFOMEDICA, TESTIMONIALS__TITLE } from "./index";
import "./testimonials.scss";

const Testimonials: FunctionComponent = () => {
  return (
    <section className="testimonials" id={ROUTE.testimonials}>
      <h1 className="testimonials__title">{TESTIMONIALS__TITLE}</h1>
      <div className="testimonials-text">
        <div className="testimonials__logo">
          <a
            href={TESTIMONIALS__INFOMEDICA.link.url}
            target={TESTIMONIALS__INFOMEDICA.link.target}
            rel={TESTIMONIALS__INFOMEDICA.link.rel}
            title={TESTIMONIALS__INFOMEDICA.link.title}
            tabIndex={0}
          >
            <img src={ICON_PATH.infomedica} alt="Infomedica logo" />
          </a>
        </div>
        <p>{TESTIMONIALS__INFOMEDICA.text}</p>
        <div className="testimonials__footer">
          <strong>{TESTIMONIALS__INFOMEDICA.author}</strong>
          <p>{TESTIMONIALS__INFOMEDICA.position}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
