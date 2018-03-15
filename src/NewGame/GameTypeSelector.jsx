import React from "react";
import { Glyphicon, Well, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { string, node, number } from "prop-types";
import { FormattedMessage } from "react-intl";

const GameTypeSelector = props => {
  const columns =
    12 /
    ((props.currentlyPlayed > 0 ? 1 : 0) +
      (props.unfinished > 0 ? 1 : 0) +
      (props.invitations > 0 ? 1 : 0));

  const playedMessage =
    props.currentlyPlayed > 0 ? (
      <Col sm={columns}>
        <FormattedMessage
          id="newgame.currentlyPlayed"
          description="Currently played games message on new game page"
          defaultMessage="{currentlyPlayed} {currentlyPlayed, plural, one {player} other {players}} currently playing"
          values={{
            currentlyPlayed: props.currentlyPlayed
          }}
        />
      </Col>
    ) : (
      <Col>
        <FormattedMessage
          id="newgame.currentlyPlayedByNobody"
          description="Nobody is currently playing message on new game page"
          defaultMessage="Nobody is currently playing"
        />
      </Col>
    );

  const unfinishedMessage =
    props.unfinished > 0 ? (
      <Col sm={columns}>
        <FormattedMessage
          id="newgame.unfinished"
          description="Unfinished games message on new game page"
          defaultMessage="You have {unfinished} unfinished {unfinished, plural, one {game} other {games}}"
          values={{
            unfinished: props.unfinished
          }}
        />
      </Col>
    ) : (
      ""
    );

  const invitationsMessage =
    props.invitations > 0 ? (
      <Col sm={columns}>
        <FormattedMessage
          id="newgame.invitations"
          description="Invitations message on new game page"
          defaultMessage="You have {invitations} {invitations, plural, one {invitation} other {invitations}}"
          values={{
            invitations: props.invitations
          }}
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
                    <Glyphicon glyph="plus" />{" "}
                    <FormattedMessage
                      id="newgame.button.inviteplayer"
                      description="Invite player button label"
                      defaultMessage="Invite Player"
                    />
                  </Button>
                </LinkContainer>
              </Col>
              <Col md={6}>
                <LinkContainer
                  to={`/new-game/${props.slug}/bot/`}
                  style={{ marginTop: "1em" }}
                >
                  <Button bsSize="large" bsStyle="success" block>
                    <FormattedMessage
                      id="newgame.button.bot"
                      description="Play With Computer button label"
                      defaultMessage="Play With Computer"
                    />
                  </Button>
                </LinkContainer>
              </Col>
            </Row>
          ) : (
            <Row>
              <LinkContainer
                to="/new-game/custom/invite/"
                style={{ marginTop: "1em" }}
              >
                <Button bsSize="large" bsStyle="success" block>
                  <FormattedMessage
                    id="newgame.button.experimental"
                    description="Experimental button label"
                    defaultMessage="I like experiments!"
                  />
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
