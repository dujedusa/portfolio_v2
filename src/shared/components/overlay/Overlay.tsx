import { FunctionComponent, useEffect, useState } from "react";
import { preventBodyPointerEvents, setBodyScroll } from "@utils";

import { OverlayProps } from "./index";
import "./overlay.scss";

const Overlay: FunctionComponent<OverlayProps> = (props) => {
  const { children, visible } = props;
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
    setBodyScroll(visible);
    preventBodyPointerEvents(visible);
  }, [visible]);

  return (
    <div className="overlay" aria-hidden={isVisible ? "false" : "true"}>
      {children}
    </div>
  );
};

export default Overlay;
