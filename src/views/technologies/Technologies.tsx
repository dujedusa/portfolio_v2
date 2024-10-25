import { FunctionComponent } from "react";
import { Icon } from "@components/icon";
import { ROUTE } from "@shared/constants";

import { TECHNOLOGIES_ICONS, TECHNOLOGIES_TITLE } from "./index";
import "./technologies.scss";

const Technologies: FunctionComponent = () => {
  return (
    <section className="technologies" id={ROUTE.experience}>
      <h1 className="technologies__title">{TECHNOLOGIES_TITLE}</h1>
      <div className="technologies__icons">
        {TECHNOLOGIES_ICONS.map((icon) => (
          <Icon
            className="technologies__icon"
            key={icon.name}
            icon={icon.name}
            color={icon.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
