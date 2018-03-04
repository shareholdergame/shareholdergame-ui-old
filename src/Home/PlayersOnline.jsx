import React from "react";
import {
  Table,
  Panel,
  ButtonGroup,
  Button,
  Glyphicon,
  Image
} from "react-bootstrap";

const PlayersOnline = () => (
  <Panel>
    <Panel.Heading>Players On-line</Panel.Heading>
    <Panel.Body style={{ padding: 0 }}>
      <Table striped style={{ margin: 0 }}>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "middle" }}>
              <Image
                src="/images/userpics/avatar_42.jpg"
                width="36"
                height="36"
                circle
              />{" "}
              Михаил
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
          <tr>
            <td style={{ verticalAlign: "middle" }}>
              <Image
                src="/images/userpics/default_avatar.png"
                width="36"
                height="36"
                circle
              />{" "}
              Alkonaft
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
          <tr>
            <td style={{ verticalAlign: "middle" }}>
              <Image
                src="/images/userpics/avatar_5.png"
                width="36"
                height="36"
                circle
              />{" "}
              Andrew
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
        </tbody>
      </Table>
    </Panel.Body>
  </Panel>
);

export default PlayersOnline;
