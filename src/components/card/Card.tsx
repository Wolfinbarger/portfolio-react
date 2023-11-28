import "./card.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Work {
  item: {
    id: number;
    title: string;
    url: string;
    image: string;
    category: string;
    description: string;
    source: string;
  };
}

export default function Card({ item }: Work) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <img src={`./${item.image}`} alt="image" />
      <div className="card__content">
        <p>{item.description}</p>
        <div className="tags" key={item.id}>
          {/* {console.log(work.value.tags)}
          {work.value.tags.forEach((tag: IconName) => {
            console.log(tag);
          })} */}
        </div>
        <div className="links">
          <a href={item.url} className="link">
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
