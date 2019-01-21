import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import { connect } from "react-redux"; // this is how we connect this component to store

import AboutMe from "./components/about-me";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/contact-me";

import logo from "./img/logo.jpg";
import linkedin from "./img/linkedin.png";
import github from "./img/Octocat/Octocat.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: 0 };
  }

  toggleNav = () => {
    console.log(this.state);

    if (this.state.menu) {
      this.setState({
        menu: 0
      });
    } else {
      this.setState({
        menu: 1
      });
    }
  };

  render() {
    return (
      <Router>
        <div>
          <section className="hero is-fullheight is-default is-bold">
            <div className="hero-head">
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <a
                      href="./documents/Resume2018_EditOrosz"
                      download="EditOrosz_CV"
                    >
                      <img src={logo} className="logo" alt={"logo"} />
                    </a>
                    <h1 className="navbar-item">{this.props.store.cvTitle}</h1>
                    <button
                      onClick={this.toggleNav}
                      className="navbar-burger burger"
                      data-target="navbarMenu"
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                  <div
                    id="navbarMenu"
                    className={
                      this.state.menu ? "navbar-menu is-active" : "navbar-menu"
                    }
                  >
                    <nav className="navbar-end">
                      <div className="tabs is-right">
                        <ul>
                          <li>
                            <Link to="/">About me</Link>
                          </li>
                          <li>
                            <Link to="/Skills">Skills</Link>
                          </li>
                          <li>
                            <Link to="/Projects">Projects</Link>
                          </li>
                          <li>
                            <Link to="/contact-me">Contact me</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </nav>
            </div>
            <div className="hero-body">
              <div className="container has-text-centered">
                <Switch>
                  <Route exact path="/" component={AboutMe} />
                  <Route exact path="/Skills" component={Skills} />
                  <Route exact path="/Projects" component={Projects} />
                  <Route exact path="/contact-me" component={ContactMe} />
                </Switch>
              </div>
            </div>

            <div className="hero-foot">
              <div className="container">
                <div className="tabs is-centered">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/the-mighty-dev-apprentice/"
                        target="_blank"
                      >
                        <img
                          src={linkedin}
                          className="image is-48x48"
                          alt={"LinkedIn"}
                        />{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/FreyaNoir?tab=repositories"
                        target="_blank"
                      >
                        <img
                          src={github}
                          className="image is-48x48"
                          alt={"GitHub"}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

const mapStoreStatesToProps = state => ({
  // map store states to this.props.store, if needed to map props to props -> (state,props)
  store: state
});

export default connect(mapStoreStatesToProps)(App);
