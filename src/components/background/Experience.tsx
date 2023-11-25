import "./experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ExperiencesItems from "./ExperiencesItems";
import { Education, Experiences } from "./Data";

function Background() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="background section" id="background">
      <h2 className="section__title">Background</h2>
      <div className="background__container container">
        <div className="background__tabs">
          <div
            className={
              toggleState === 1
                ? "background__button background__active button--flex"
                : "background__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <FontAwesomeIcon className={"fa-fw"} icon={faGraduationCap} />
            &nbsp;&nbsp;Education
          </div>

          <div
            className={
              toggleState === 2
                ? "background__button background__active button--flex"
                : "background__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            &nbsp;&nbsp;Experience
          </div>
        </div>
        <div className="background__sections">
          <div
            className={
              toggleState === 1
                ? "background__content background__content-active"
                : "background__content "
            }
          >
            {Education.map((item) => {
              return <ExperiencesItems key={item.id} item={item} />;
            })}
          </div>
          <div
            className={
              toggleState === 2
                ? "background__content background__content-active"
                : "background__content "
            }
          >
            {Experiences.map((item) => {
              return <ExperiencesItems key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;
