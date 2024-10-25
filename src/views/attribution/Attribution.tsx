import { FunctionComponent } from "react";
import { Link } from "@shared/models";

import {
  FA_ICON_LINKS,
  FA__ATTRIBUTION_DESCRIPTION,
  OTHER_ATTRIBUTION_DESCRIPTION,
  STENCIL_ATTRIBUTION,
  TS_ATTRIBUTION,
  VS_CODE_ATTRIBUTION,
} from "./index";
import "./attribution.scss";

const Attribution: FunctionComponent = () => {
  const getAttributionItem = (link: Link) => {
    return (
      <li key={link.url}>
        <span>&#8618;</span>
        <a
          href={link.url}
          target={link.target}
          rel={link.rel}
          title={link.title}
          tabIndex={0}
        >
          {link.title}
        </a>
      </li>
    );
  };

  return (
    <section className="attribution">
      <p
        className="attribution__description"
        dangerouslySetInnerHTML={{ __html: FA__ATTRIBUTION_DESCRIPTION }}
      ></p>
      <ul>{FA_ICON_LINKS.map((link) => getAttributionItem(link))}</ul>
      <p className="attribution__description">
        {OTHER_ATTRIBUTION_DESCRIPTION}
      </p>
      <ul>
        <li dangerouslySetInnerHTML={{ __html: STENCIL_ATTRIBUTION }}></li>
        <li dangerouslySetInnerHTML={{ __html: VS_CODE_ATTRIBUTION }}></li>
        <li dangerouslySetInnerHTML={{ __html: TS_ATTRIBUTION }}></li>
      </ul>
    </section>
  );
};

export default Attribution;
