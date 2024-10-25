import { FunctionComponent, PropsWithChildren } from "react";

import "./timeline.scss";

const Timeline: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <ul className="timeline">{children}</ul>;
};

export default Timeline;
