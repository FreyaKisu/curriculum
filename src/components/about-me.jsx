import React, { Component } from "react";
import profilePic from "../img/profile.jpg";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="columns is-vcentered">
        <div className="column is-5">
          <figure className="pic">
            <img src={profilePic} alt={"ProfilePic"} />
          </figure>
        </div>
        <div className="column is-5 is-offset-1 is-horizontal-center">
          <h2 id="name" className="subtitle is-3">
            Edit Orosz
          </h2>
          <h3 id="title" className="subtitle is-4 is-horizontal-center">
            Software Developer Student
          </h3>
          <br />
          <section>
            I've been living and studying in three countries so far, starting
            from Hungary, through Austria, ending up in Finland. I'm a proactive
            and enthusiastic student of Business Information Technology in
            Haaga-Helia University of Applied Sciences, where I could develop
            proven problem-solving, and creative-thinking, team working skills.
            I learn more and more every day and since it's my passion, I develop
            and widen my knowledge outside of the school as well with &nbsp;
            <a href="https://weather-observation-app.herokuapp.com/">
              working on own projects
            </a>
            , visiting to tech events, participating in hackathons (Junction
            2017-2018, Junction sTuPiD hAcK2018) and &nbsp;
            <a href="http://myy.haaga-helia.fi/~a1703056/Fujitsu%20Innovation%20Award_Finalist%20Certificate_Edit%20Orosz.pdf">
              innovation challenges
            </a>
            . I'm looking for new opportunities to learn more and start working
            as a Full-Stack, Front- or Back-End developer.
          </section>
        </div>
      </div>
    );
  }
}

export default AboutMe;
