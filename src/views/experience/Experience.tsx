import { FunctionComponent } from "react";
import { Timeline } from "@components/timeline";
import { TimelineItem } from "@components/timeline-item";

import { EXPERIENCES, EXPERIENCE_TITLE } from "./index";
import { Experience as ExperienceModel } from "./experience.model";
import "./experience.scss";

const Experience: FunctionComponent = () => {
  const getTimelineItem = (experience: ExperienceModel) => (
    <TimelineItem
      timestamp={experience.timestamp as string}
      key={experience.title}
    >
      <div className="experience-item">
        {experience.link ? (
          <a
            href={experience.link?.url}
            target={experience.link?.target}
            rel={experience.link?.rel}
            title={experience.link?.title}
            tabIndex={0}
          >
            {experience.title}
          </a>
        ) : (
          <h1>{experience.title}</h1>
        )}
        {Array.isArray(experience.description) ? (
          experience.description.map((desc) => <p key={desc}>{desc}</p>)
        ) : (
          <p>{experience.description}</p>
        )}
        <ul>
          {experience.listItems?.map((item) => (
            <li key={item}>
              <span>&#8618;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </TimelineItem>
  );

  return (
    <section className="experience">
      <h1 className="experience__title">{EXPERIENCE_TITLE}</h1>
      <Timeline>
        {EXPERIENCES.map((experience) => getTimelineItem(experience))}
      </Timeline>
    </section>
  );
};

export default Experience;
