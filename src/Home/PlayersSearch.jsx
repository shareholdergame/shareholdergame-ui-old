import React from "react";
import { connect } from "react-redux";

import Label from "react-bootstrap/lib/Label";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import Panel from "react-bootstrap/lib/Panel";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import InputGroup from "react-bootstrap/lib/InputGroup";

import { arrayOf, number, shape, string } from "prop-types";
import {
  FormattedMessage,
  injectIntl,
  intlShape,
  defineMessages
} from "react-intl";

import PlayersList from "../PlayersList";

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

      <PlayersList players={props.players} message invite />
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
  ).isRequired,
  intl: intlShape.isRequired
};

export default connect(state => ({
  players: state.home.players.filter(player => player.online)
}))(injectIntl(PlayersSearch));
