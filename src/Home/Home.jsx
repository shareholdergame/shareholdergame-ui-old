import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Activity from "./Activity/Activity";
import PlayersSearch from "./PlayersSearch";
import GlobalChat from "./GlobalChat";

const Home = () => (
  <div>
    <Row style={{ paddingBottom: "1em" }}>
      <Col xs={12} md={7}>
        <LinkContainer to="new-game/4x6/">
          <Button bsSize="large" bsStyle="success" block>
            <div>Start New Game</div>
            <div style={{ fontSize: "small" }}>4 x 6 / 10 turns total</div>
          </Button>
        </LinkContainer>
      </Col>
      <Col xs={12} md={5}>
        <LinkContainer to="new-game/">
          <Button bsSize="large" block>
            <div>Game Options</div>
            <div style={{ fontSize: "small" }}>
              More players per game, custom number of cards
            </div>
          </Button>
        </LinkContainer>
      </Col>
    </Row>

    <Row>
      <Col xs={12} md={7}>
        <Activity />
      </Col>

      <Col xs={12} md={5}>
        <PlayersSearch />
        <GlobalChat />
      </Col>
    </Row>
  </div>
);

export default Home;
