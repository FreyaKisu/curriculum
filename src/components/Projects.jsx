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
        <div className="column is-5">
          <figure className="projectpic">
            <img src={projects} alt={"Projects"} />
          </figure>
        </div>
        <div className="column is-6 is-offset-1">
          <div className="column">
            <h2>Projects</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
