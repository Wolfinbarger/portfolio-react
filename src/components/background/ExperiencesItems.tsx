import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

interface BackgroundItem {
  item: { id: number; title: string; subtitle: string; date: string };
}

function BackgroundItems({ item }: BackgroundItem) {
  const side = item.id % 2 === 0 ? "right" : "left";
  return (
    <>
      {side === "left" && (
        <div className="background__data" key={item.id}>
          <Slide triggerOnce direction="left">
            <div>
              <h3 className="background__title">{item.title}</h3>
              <span className="background__subtitle">{item.subtitle}</span>
              <div className="background__calendar">
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ color: "#7ed321" }}
                />{" "}
                {item.date}
              </div>
            </div>
          </Slide>

          <div>
            <span className="background__rounder"></span>
            <span className="background__line"></span>
          </div>
        </div>
      )}

      {side === "right" && (
        <div className="background__data" key={item.id}>
          <div></div>

          <div>
            <span className="background__rounder"> </span>
            <span className="background__line"></span>
          </div>
          <Slide triggerOnce direction="right">
            <div>
              <h3 className="background__title">{item.title}</h3>
              <span className="background__subtitle">{item.subtitle}</span>
              <div className="background__calendar">
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ color: "#7ed321" }}
                />{" "}
                {item.date}
              </div>
            </div>
          </Slide>
        </div>
      )}
    </>
  );
}

export default BackgroundItems;
