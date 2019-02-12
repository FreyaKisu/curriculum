import React, { Component } from "react";
import projects from "../img/projects.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="columns is-vcentered">
        <div className="column is-5 is-horizontal-center">
          <figure className="projectpic">
            <img src={projects} alt={"Projects"} />
          </figure>
        </div>
        <div className="column is-4 is-offset-2">
          <div className="column">
            <h2 id="projects" className="subtitle is-3">
              Projects
            </h2>
            <p>
              Under progress, come back later for updated Projects info. Until
              then, take a look at mey GitHub repo. :)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
