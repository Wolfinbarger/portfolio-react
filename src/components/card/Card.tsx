import "./card.scss";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHtml5,
  IconName,
} from "@fortawesome/free-brands-svg-icons";

export type ArrayType = string[];

export default function Card(work) {
  return (
    <div className="card">
      <h3>{work.value.title}</h3>
      <img src={`src/assets/images/${work.value.image}`} alt="image" />
      <div className="card__content">
        <p>{work.value.description}</p>
        <div className="tags" key={work.value.id}>
          {console.log(work.value.tags)}
          {work.value.tags.forEach((tag: IconName) => {
            console.log(tag);
          })}
        </div>
        <div className="links">
          <a href={work.value.url} className="link">
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ color: "#ffffff" }}
              fixedWidth
            />
            &nbsp;Demo
          </a>
          <br />
          <a href="{work.value.source}" className="link">
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
            &nbsp;Source
          </a>
        </div>
      </div>
    </div>
  );
}
