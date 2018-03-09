import React from "react";
import { Glyphicon, Well, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { string, node, number } from "prop-types";
import { FormattedPlural } from "react-intl";

const GameTypeSelector = props => {
  const columns =
    12 /
    ((props.currentlyPlayed > 0 ? 1 : 0) +
      (props.unfinished > 0 ? 1 : 0) +
      (props.invitations > 0 ? 1 : 0));

  const playedMessage =
    props.currentlyPlayed > 0 ? (
      <Col sm={columns}>
        {props.currentlyPlayed}{" "}
        <FormattedPlural
          value={props.invitations}
          one="player"
          other="players"
        />{" "}
        currently playing
      </Col>
    ) : (
      <Col>Nobody is currently playing</Col>
    );

  const unfinishedMessage =
    props.unfinished > 0 ? (
      <Col sm={columns}>
        You have {props.unfinished} unfinished{" "}
        <FormattedPlural value={props.invitations} one="game" other="games" />
      </Col>
    ) : (
      ""
    );

  const invitationsMessage =
    props.invitations > 0 ? (
      <Col sm={columns}>
        You have {props.invitations}{" "}
        <FormattedPlural
          value={props.invitations}
          one="invitation"
          other="invitations"
        />
      </Col>
    ) : (
      ""
    );

  return (
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
          {props.type}
        </Col>
        <Col sm={8}>
          <Row style={{ textAlign: "center", fontSize: "large" }}>
            {props.description}
          </Row>

          <Row style={{ textAlign: "center" }}>
            {playedMessage}
            {unfinishedMessage}
            {invitationsMessage}
          </Row>

          {props.slug ? (
            <Row>
              <Col md={6}>
                <LinkContainer
                  to={`/new-game/${props.slug}/invite/`}
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
                  to={`/new-game/${props.slug}/bot/`}
                  style={{ marginTop: "1em" }}
                >
                  <Button bsSize="large" bsStyle="success" block>
                    Play With Computer
                  </Button>
                </LinkContainer>
              </Col>
            </Row>
          ) : (
            <Row>
              <LinkContainer to="new-game/custom/" style={{ marginTop: "1em" }}>
                <Button bsSize="large" bsStyle="success" block>
                  I like experiments!
                </Button>
              </LinkContainer>
            </Row>
          )}
        </Col>
      </Row>
    </Well>
  );
};

GameTypeSelector.propTypes = {
  type: node.isRequired,
  description: node.isRequired,
  currentlyPlayed: number,
  unfinished: number,
  invitations: number,
  slug: string
};

GameTypeSelector.defaultProps = {
  currentlyPlayed: 0,
  unfinished: 0,
  invitations: 0,
  slug: null
};

export default GameTypeSelector;
