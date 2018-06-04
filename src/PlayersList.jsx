import React from "react";

import { Link } from "react-router-dom";

import Table from "react-bootstrap/lib/Table";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Image from "react-bootstrap/lib/Image";

import { arrayOf, number, shape, string, bool } from "prop-types";
import { FormattedMessage } from "react-intl";

const PlayersList = props => (
  <Table striped style={{ margin: 0 }}>
    <tbody>
      {props.players.map(player => (
        <tr key={player.name}>
          <td style={{ verticalAlign: "middle" }}>
            <Link to={`/players/${player.name}`}>
              <Image
                src={`/images/userpics/${player.userpic}`}
                width="36"
                height="36"
                circle
              />
            </Link>{" "}
            <Link to={`/players/${player.name}`}>{player.name}</Link>
          </td>
          <td style={{ verticalAlign: "middle" }} align="right">
            <ButtonGroup>
              {props.message && (
                <Button bsSize="small" bsStyle="default">
                  <Glyphicon glyph="envelope" />{" "}
                  <FormattedMessage
                    id="home.playersearch.sendmessage"
                    description="Player search send message button label"
                    defaultMessage="Send Message"
                  />
                </Button>
              )}
              {props.invite && (
                <Button bsSize="small" bsStyle="primary">
                  <Glyphicon glyph="user" />
                  <Glyphicon glyph="plus" />{" "}
                  <FormattedMessage
                    id="home.playersearch.invite"
                    description="Player invitation button label"
                    defaultMessage="Invite"
                  />
                </Button>
              )}
              {props.befriend && (
                <Button bsSize="small" bsStyle="success">
                  <Glyphicon glyph="ok" />{" "}
                  <FormattedMessage
                    id="home.activity.invitation.accept"
                    description="Accept button label for invitation activity"
                    defaultMessage="Accept"
                  />
                </Button>
              )}
              {props.befriend && (
                <Button bsSize="small" bsStyle="danger">
                  <Glyphicon glyph="remove" />{" "}
                  <FormattedMessage
                    id="home.activity.invitation.decline"
                    description="Decline button label for invitation activity"
                    defaultMessage="Decline"
                  />
                </Button>
              )}
            </ButtonGroup>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

PlayersList.propTypes = {
  players: arrayOf(
    shape({
      userpic: string.isRequired,
      name: string.isRequired,
      id: number.isRequired
    })
  ).isRequired,
  message: bool,
  invite: bool,
  befriend: bool
};

PlayersList.defaultProps = {
  message: false,
  invite: false,
  befriend: false
};

export default PlayersList;
