import React from "react";
import { connect } from "react-redux";

import Button from "react-bootstrap/lib/Button";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { LinkContainer } from "react-router-bootstrap";
import { FormattedMessage } from "react-intl";
import { string, shape, number } from "prop-types";

import Activity from "./Activity/Activity";
import PlayersSearch from "./PlayersSearch";
import GlobalChat from "./GlobalChat";

const Home = props => (
  <div>
    <Row style={{ paddingBottom: "1em" }}>
      <Col xs={12} md={7}>
        <LinkContainer to="new-game/4x6/">
          <Button bsSize="large" bsStyle="success" block>
            <div>
              <FormattedMessage
                id="home.startnewgame"
                description="Start New Game game button label on home page"
                defaultMessage="Start New Game"
              />
            </div>
            <div style={{ fontSize: "small" }}>
              <FormattedMessage
                id="home.startnewgame.detail"
                description="Start New Game button detail text"
                defaultMessage="4 x 6 / 10 turns total"
              />
            </div>
          </Button>
        </LinkContainer>
      </Col>
      <Col xs={12} md={5}>
        <LinkContainer to="new-game/">
          <Button bsSize="large" block>
            <div>
              <FormattedMessage
                id="home.gameoptions"
                description="Game Options button text"
                defaultMessage="Game Options"
              />
            </div>
            <div style={{ fontSize: "small" }}>
              <FormattedMessage
                id="home.gameoptions.detail"
                description="Game Options button detail text"
                defaultMessage="More players per game, custom number of cards"
              />
            </div>
          </Button>
        </LinkContainer>
      </Col>
    </Row>

    <Row>
      <Col xs={12} md={7}>
        {props.self && <Activity />}
      </Col>

      <Col xs={12} md={5}>
        <PlayersSearch />
        <GlobalChat />
      </Col>
    </Row>
  </div>
);

Home.propTypes = {
  self: shape({
    id: number.isRequired,
    name: string.isRequired,
    userpic: string.isRequired
  })
};

Home.defaultProps = {
  self: null
};

export default connect(state => ({
  self: state.self.self
}))(Home);
