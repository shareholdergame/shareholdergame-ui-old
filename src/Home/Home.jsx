import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Activity from "./Activity/Activity";
import PlayersOnline from "./PlayersOnline";
import GlobalChat from "./GlobalChat";

const Home = () => (
  <div>
    <Row style={{ paddingBottom: "1em" }}>
      <Col xs={12} md={7}>
        <LinkContainer to="new-game">
          <Button bsSize="large" bsStyle="success" block>
            Start New Game
          </Button>
        </LinkContainer>
      </Col>
      <Col xs={12} md={5}>
        <LinkContainer to="new-game">
          <Button bsSize="large" block>
            Game Options
          </Button>
        </LinkContainer>
      </Col>
    </Row>

    <Row>
      <Col xs={12} md={7}>
        <Activity />
      </Col>

      <Col xs={12} md={5}>
        <PlayersOnline />
        <GlobalChat />
      </Col>
    </Row>
  </div>
);

export default Home;
