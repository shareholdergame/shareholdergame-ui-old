import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Label from "react-bootstrap/lib/Label";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Table from "react-bootstrap/lib/Table";
import FormControl from "react-bootstrap/lib/FormControl";
import Panel from "react-bootstrap/lib/Panel";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Image from "react-bootstrap/lib/Image";
import InputGroup from "react-bootstrap/lib/InputGroup";

import { arrayOf, number, shape, string } from "prop-types";
import {
  FormattedMessage,
  injectIntl,
  intlShape,
  defineMessages
} from "react-intl";

const messages = defineMessages({
  placeholder: {
    id: "home.playersearch.placeholder",
    description: "Player search input field placeholder",
    defaultMessage: "type here to search players..."
  }
});

const PlayersSearch = props => (
  <Panel>
    <Panel.Heading>
      <FormattedMessage
        id="home.playersearch.panellabel"
        description="Players Search panel label"
        defaultMessage="Players"
      />{" "}
      <Label bsStyle="success">
        <FormattedMessage
          id="home.playersearch.online"
          description="Players Search on-line filter label"
          defaultMessage="on-line"
        />
      </Label>
    </Panel.Heading>
    <Panel.Body style={{ padding: 0 }}>
      <FormGroup style={{ marginBottom: 0 }}>
        <InputGroup>
          <FormControl
            type="text"
            placeholder={props.intl.formatMessage(messages.placeholder)}
          />
          <InputGroup.Button>
            <Button>
              <Glyphicon glyph="search" />{" "}
              <FormattedMessage
                id="home.playersearch.button"
                description="Player search button label"
                defaultMessage="Search"
              />
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>

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
                  <Button bsSize="small" bsStyle="default">
                    <Glyphicon glyph="envelope" />{" "}
                    <FormattedMessage
                      id="home.playersearch.sendmessage"
                      description="Player search send message button label"
                      defaultMessage="Send Message"
                    />
                  </Button>
                  <Button bsSize="small" bsStyle="primary">
                    <Glyphicon glyph="user" />
                    <Glyphicon glyph="plus" />{" "}
                    <FormattedMessage
                      id="home.playersearch.invite"
                      description="Player search invitation button label"
                      defaultMessage="Invite"
                    />
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel.Body>
  </Panel>
);

PlayersSearch.propTypes = {
  players: arrayOf(
    shape({
      userpic: string.isRequired,
      name: string.isRequired,
      id: number.isRequired
    })
  ),
  intl: intlShape.isRequired
};

PlayersSearch.defaultProps = {
  players: []
};

export default connect(state => ({
  players: state.home.players.filter(player => player.online)
}))(injectIntl(PlayersSearch));
