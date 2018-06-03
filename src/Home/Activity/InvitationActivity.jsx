import React from "react";
import { Link } from "react-router-dom";

import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Image from "react-bootstrap/lib/Image";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { number, shape, string, bool } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import { FormattedMessage } from "react-intl";

const InvitationActivity = props => {
  let action;

  if (props.replied) {
    if (props.accepted) {
      action = (
        <LinkContainer to={`/game/${props.game.id}`}>
          <Button>
            <Glyphicon glyph="eye-open" />{" "}
            <FormattedMessage
              id="home.activity.invitation.accepted"
              description="Acceptance label text for invitation activity"
              defaultMessage="You Accepted"
            />
          </Button>
        </LinkContainer>
      );
    } else {
      action = (
        <Button className="disabled">
          <Glyphicon glyph="remove" />{" "}
          <FormattedMessage
            id="home.activity.invitation.declined"
            description="Declined label text for invitation activity"
            defaultMessage="You Declined"
          />
        </Button>
      );
    }
  } else {
    action = (
      <ButtonGroup>
        <Button bsStyle="success">
          <Glyphicon glyph="ok" />{" "}
          <FormattedMessage
            id="home.activity.invitation.accept"
            description="Accept button label for invitation activity"
            defaultMessage="Accept"
          />
        </Button>
        <Button bsStyle="danger">
          <Glyphicon glyph="remove" />{" "}
          <FormattedMessage
            id="home.activity.invitation.decline"
            description="Decline button label for invitation activity"
            defaultMessage="Decline"
          />
        </Button>
      </ButtonGroup>
    );
  }

  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <Image
          src={`/images/userpics/${props.player.userpic}`}
          width="48"
          height="48"
          circle
        />
      </td>
      <td>
        <Row>
          <Col xs={12} sm={6}>
            <b>
              <Link to={`/players/${props.player.name}`}>
                {props.player.name}
              </Link>{" "}
              <FormattedMessage
                id="home.activity.invitation.invites"
                description="Player invites you to play text for invitation activity"
                defaultMessage="invites you to play"
              />
            </b>
            <p>
              <FormattedMessage
                id="home.activity.invitation.gamedescription"
                description="Game description text for invitation activity"
                defaultMessage="Game {major} x {minor} / {total} total turns"
                values={{
                  major: props.game.options.major,
                  minor: props.game.options.minor,
                  total: props.game.options.major + props.game.options.minor
                }}
              />
            </p>
          </Col>
          <Col xs={12} sm={6} className="activity-actions">
            {action}
          </Col>
        </Row>
      </td>
    </tr>
  );
};

InvitationActivity.propTypes = {
  player: shape({
    name: string.isRequired,
    userpic: string.isRequired
  }).isRequired,
  game: shape({
    id: number,
    options: shape({
      major: number.isRequired,
      minor: number.isRequired
    }).isRequired
  }).isRequired,
  replied: bool.isRequired,
  accepted: bool
};

InvitationActivity.defaultProps = {
  accepted: true
};

export default InvitationActivity;
