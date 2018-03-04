import React, { Component } from "react";
import { Row } from "react-bootstrap";

class App extends Component {
  STARTYEAR = 2013; // copyright start year
  YEAR = 2018; // current year

  render() {
    return (
      <Row>
        <footer className="footer navbar navbar-inverse">
          <div className="container">
            <ul className="nav navbar-nav pull-left">
              <li>
                <a href="/">
                  {this.STARTYEAR}-{this.YEAR} &copy; Shareholder Game
                </a>
              </li>
              {/* <li><a href="/privacy_policy.php">Privacy Policy</a></li> */}
            </ul>
          </div>
        </footer>
      </Row>
    );
  }
}

export default App;
