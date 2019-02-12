import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import { connect } from "react-redux"; // this is how we connect this component to store

import AboutMe from "./components/about-me";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/contact-me";

import logo from "./img/logo.png";
import linkedin from "./img/linkedin.png";
import github from "./img/Octocat/Octocat.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: 0 };
    window.addEventListener(
      "hashchange",
      () => {
        this.setState({
          menu: 0
        });
      },
      false
    );
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
            <div
              className={this.state.menu ? "hero-head is-active" : "hero-head"}
            >
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <a
                      href="./documents/Resume2018_EditOrosz"
                      download="EditOrosz_CV"
                      id="logo"
                    >
                      <img src={logo} alt={"logo"} />
                      <h3 className="navbar-item">
                        {this.props.store.cvDownload}
                      </h3>
                    </a>
                    <a
                      className=""
                      href="http://myy.haaga-helia.fi/~a1703056/Edit%20Orosz%20CV%202019/Edit%20Orosz%20CV.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 id="onlineCV" className="navbar-item">
                        Check my CV online
                      </h1>
                    </a>
                    <button
                      onClick={this.toggleNav}
                      className={
                        this.state.menu
                          ? "navbar-burger burger is-active"
                          : "navbar-burger burger"
                      }
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
                            <NavLink exact activeClassName="navActive" to="/">
                              About me
                            </NavLink>
                          </li>
                          <li>
                            <NavLink activeClassName="navActive" to="/Skills">
                              Skills
                            </NavLink>
                          </li>
                          <li>
                            <NavLink activeClassName="navActive" to="/Projects">
                              Projects
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="navActive"
                              to="/contact-me"
                            >
                              Contact me
                            </NavLink>
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
                  <Route path="/Skills" component={Skills} />
                  <Route path="/Projects" component={Projects} />
                  <Route path="/contact-me" component={ContactMe} />
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
                        rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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
