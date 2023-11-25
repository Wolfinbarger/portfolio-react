import "./skills.scss";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__content">
        <h2>My Skills</h2>

        <div className="skills__content">
          <div className="row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
          </div>

          <div className="row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" />
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" /> */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" />
          </div>

          <div className="row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
