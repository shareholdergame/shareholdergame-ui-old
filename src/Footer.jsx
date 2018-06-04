import React from "react";
import Row from "react-bootstrap/lib/Row";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const STARTYEAR = 2013; // copyright start year
const YEAR = new Date().getFullYear(); // current year

const App = () => (
  <Row>
    <footer className="footer navbar navbar-inverse">
      <div className="container">
        <ul className="nav navbar-nav pull-left">
          <li>
            <Link to="/">
              {STARTYEAR}-{YEAR} &copy;{" "}
              <FormattedMessage
                id="footer.gametitle"
                description="Game copyright in the footer"
                defaultMessage="Shareholder Game"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  </Row>
);

export default App;
