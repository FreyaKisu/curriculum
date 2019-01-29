import React, { Component } from "react";
import codeCat from "../img/cat.jpg";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="columns is-vcentered">
        <div className="column is-6 is-offset-1">
          <h2 class="subtitle is-3">Skills</h2>
          <br />
          <section>
            <ul>
              <li>
                {" "}
                Front-end (React, JavaScript, HTML5, CSS3, SASS, LESS,
                Bootstrap, Bulma)
              </li>
              <li> Back-end (Node.js, Java, SpringBoot)</li>
              <li> Mobile development (React Native, Expo)</li>
              <li>
                {" "}
                Database programming, database design (SQL Server, MySQL,
                MariaDB, HeidiSQL)
              </li>
              <li> Version control (Git, GitHub)</li>
              <li> Text editors (Command Line, Command Prompt, Vim)</li>
              <li> Online web hosting (Heroku)</li>
              <li> Agile development, Scrum</li>
              <li> SEO, Google Analytics, Google AdWords</li>
              <li> Business Intelligence (Power BI, QlickView)</li>
              <li> SAP, Microsoft Dynamics NAV</li>
              <li> Usability in design</li>
              <li>
                {" "}
                Available in four languages: English, Finnish, German, Hungarian
              </li>
              <li>
                {" "}
                Bonuses: music/movie recommendations by request, cookies
                occassionally
              </li>
            </ul>
          </section>
        </div>
        <div className="column is-4">
          <figure className="pic">
            <img src={codeCat} alt={"CodingCat"} />
          </figure>
        </div>
      </div>
    );
  }
}

export default Skills;
