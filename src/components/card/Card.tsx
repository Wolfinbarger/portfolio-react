import "./card.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ArrayType = string[];

export default function Card(work) {
  const tags: ArrayType = [];

  work.value.tags.forEach((tag: string) => {
    tags.push(<i className={tag}></i>);
  });

  console.log(tags);
  return (
    <div className="card">
      <h3>{work.value.title}</h3>
      <img src={`src/assets/images/${work.value.image}`} alt="image" />
      <div className="card__content">
        <p>{work.value.description}</p>
        <div className="tags" key={work.value.id}>
          {work.value.tags.forEach((tag) => {
            {
              tag;
            }
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
