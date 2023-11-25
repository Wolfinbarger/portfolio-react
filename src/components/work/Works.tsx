import "./work.scss";
import { projectsData } from "./Data";
import Card from "../card/Card";

export default function Works() {
  return (
    <section className="works" id="works">
      <h2>My Works</h2>

      <div className="works__content">
        {projectsData.map((work) => (
          <Card key={work.id} value={work} />
        ))}
      </div>
    </section>
  );
}
