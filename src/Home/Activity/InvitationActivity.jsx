import React from "react";
import {
  ButtonGroup,
  Button,
  Glyphicon,
  Image,
  Row,
  Col
} from "react-bootstrap";
import { number, shape, string, bool } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

const InvitationActivity = props => {
  let action;

  if (props.replied) {
    if (props.accepted) {
      action = (
        <LinkContainer to={`/game/${props.game.id}`}>
          <Button>
            <Glyphicon glyph="eye-open" /> You Accepted
          </Button>
        </LinkContainer>
      );
    } else {
      action = (
        <Button className="disabled">
          <Glyphicon glyph="remove" /> You Declined
        </Button>
      );
    }
  } else {
    action = (
      <ButtonGroup>
        <Button bsStyle="success">
          <Glyphicon glyph="ok" /> Accept
        </Button>
        <Button bsStyle="danger">
          <Glyphicon glyph="remove" /> Decline
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
            <b>{props.player.name} invites you to play</b>
            <p>
              Game {props.game.options.major} x {props.game.options.minor} /{" "}
              {props.game.options.major + props.game.options.minor} total turns
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
