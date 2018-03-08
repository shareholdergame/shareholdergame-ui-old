import React from "react";
import { PageHeader, Glyphicon, Well, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NewGame = () => (
  <div>
    <PageHeader>Select Game Settings</PageHeader>
    <Well>
      <Row>
        <Col
          sm={4}
          style={{
            fontSize: "xx-large",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          <p style={{ fontSize: "1.5em" }}>3 x 5</p>
          <p>8 turns</p>
        </Col>
        <Col sm={8}>
          <Row style={{ textAlign: "center", fontSize: "large" }}>
            <p>Short game configuration.</p>
            <p>Good for beginners and training.</p>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col>Nobody is currently playing</Col>
          </Row>
          <Row>
            <Col md="6">
              <LinkContainer
                to="new-game/3x5/invite/"
                style={{ marginTop: "1em" }}
              >
                <Button bsSize="large" bsStyle="primary" block>
                  <Glyphicon glyph="user" />
                  <Glyphicon glyph="plus" /> Invite Player
                </Button>
              </LinkContainer>
            </Col>
            <Col md={6}>
              <LinkContainer
                to="new-game/3z5/bot/"
                style={{ marginTop: "1em" }}
              >
                <Button bsSize="large" bsStyle="success" block>
                  Play With Computer
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </Well>

    <Well>
      <Row>
        <Col
          sm={4}
          style={{
            fontSize: "xx-large",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          <p style={{ fontSize: "1.5em" }}>4 x 6</p>
          <p>10 turns</p>
        </Col>
        <Col sm={8}>
          <Row style={{ textAlign: "center", fontSize: "large" }}>
            <p>Standard game settings.</p>
            <p>Good for regular games and tournaments.</p>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col sm={4}>7 players currently playing</Col>
            <Col sm={4}>You have one unfinished game</Col>
            <Col sm={4}>You have one invitation</Col>
          </Row>
          <Row>
            <Col md="6">
              <LinkContainer
                to="new-game/4x6/invite/"
                style={{ marginTop: "1em" }}
              >
                <Button bsSize="large" bsStyle="primary" block>
                  <Glyphicon glyph="user" />
                  <Glyphicon glyph="plus" /> Invite Player
                </Button>
              </LinkContainer>
            </Col>
            <Col md={6}>
              <LinkContainer
                to="new-game/4x6/bot/"
                style={{ marginTop: "1em" }}
              >
                <Button bsSize="large" bsStyle="success" block>
                  Play With Computer
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </Well>

    <Well>
      <Row>
        <Col
          sm={4}
          style={{
            fontSize: "xx-large",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          <p style={{ fontSize: "1.5em" }}>Custom</p>
        </Col>
        <Col sm={8}>
          <Row style={{ textAlign: "center", fontSize: "large" }}>
            <p>Game experiments.</p>
            <p>3+ players</p>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col sm={6}>Nobody is currently playing</Col>
            <Col sm={6}>You have one invitation</Col>
          </Row>
          <Row>
            <LinkContainer to="new-game/custom/" style={{ marginTop: "1em" }}>
              <Button bsSize="large" bsStyle="success" block>
                I like experiments!
              </Button>
            </LinkContainer>
          </Row>
        </Col>
      </Row>
    </Well>
  </div>
);

NewGame.propTypes = {};

export default NewGame;
