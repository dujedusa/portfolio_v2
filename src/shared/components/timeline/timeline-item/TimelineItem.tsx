import { FunctionComponent, PropsWithChildren } from "react";

import { TimelineItemProps } from "./index";
import "./timeline-item.scss";

const TimelineItem: FunctionComponent<PropsWithChildren<TimelineItemProps>> = (
  props
) => {
  return (
    <li className="timeline-item">
      <div className="timeline-item__timestamp">
        <span className={props.timestamp || "timeline-item__timestamp--empty"}>
          {props.timestamp}
        </span>
      </div>
      <div className="timeline-item__tail"></div>
      <div className="timeline-item__dot"></div>
      <div className="timeline-item__content">{props.children}</div>
    </li>
  );
};

export default TimelineItem;
