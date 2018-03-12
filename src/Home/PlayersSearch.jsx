import React from "react";
import { connect } from "react-redux";
import {
  Table,
  Panel,
  ButtonGroup,
  Button,
  Glyphicon,
  Image,
  FormGroup,
  InputGroup,
  FormControl,
  Label
} from "react-bootstrap";
import { arrayOf, number, shape, string } from "prop-types";
import { FormattedMessage } from "react-intl";

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
            placeholder="type here to search players..."
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
          {props.players_online.map(player => (
            <tr key={player.name}>
              <td style={{ verticalAlign: "middle" }}>
                <Image
                  src={`/images/userpics/${player.userpic}`}
                  width="36"
                  height="36"
                  circle
                />{" "}
                {player.name}
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
  players_online: arrayOf(
    shape({
      userpic: string.isRequired,
      name: string.isRequired,
      id: number.isRequired
    })
  )
};

PlayersSearch.defaultProps = {
  players_online: []
};

export default connect(state => ({
  players_online: state.home.players_online
}))(PlayersSearch);
