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

const PlayersSearch = props => (
  <Panel>
    <Panel.Heading>
      Players <Label bsStyle="success">on-line</Label>
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
              <Glyphicon glyph="search" /> Search
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>

      <Table striped style={{ margin: 0 }}>
        <tbody>
          {props.players_online.map(player => (
            <tr>
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
                    <Glyphicon glyph="envelope" /> Send Message
                  </Button>
                  <Button bsSize="small" bsStyle="primary">
                    <Glyphicon glyph="user" />
                    <Glyphicon glyph="plus" /> Invite
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
