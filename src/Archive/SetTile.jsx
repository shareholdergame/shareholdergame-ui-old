import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Glyphicon,
  Button,
  Form,
  FormGroup,
  Image,
  Label,
  Well
} from "react-bootstrap";
import {
  FormattedNumber,
  FormattedRelative,
  FormattedMessage
} from "react-intl";
import { arrayOf, bool, shape, number, string } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

const gameLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const SetTile = props => (
  <Well style={{ paddingBottom: 11 }}>
    <Row>
      <Col xs={12} style={{ marginBottom: "1em" }}>
        <span style={{ whiteSpace: "nowrap" }}>
          <FormattedMessage
            id="mygames.game.type"
            description="props.game type text on props.game tile"
            defaultMessage="{major} x {minor} - {total} turns"
            values={{
              major: props.game.options.major,
              minor: props.game.options.minor,
              total: props.game.options.major + props.game.options.minor
            }}
          />
        </span>
        <span className="pull-right">
          <span style={{ whiteSpace: "nowrap" }} className="hidden-xs">
            <FormattedMessage
              id="archive.game.finished"
              description="game end time text on game tile"
              defaultMessage="Finished:"
            />
          </span>{" "}
          <span style={{ whiteSpace: "nowrap" }}>
            <FormattedRelative value={new Date(props.game.finished)} />
          </span>
        </span>
      </Col>
    </Row>

    <table className="table">
      <thead>
        <tr>
          <th />
          <th style={{ textAlign: "center", width: "1.5em" }}>
            <FormattedMessage
              id="archive.game.total"
              description="Total label for score table"
              defaultMessage="Total"
            />
          </th>
          {props.game.players[0].wongames.map((item, index) => (
            <th
              className="hidden-xs"
              key={gameLetters[index]}
              style={{ textAlign: "center", width: "1.5em" }}
            >
              {gameLetters[index]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.game.players.map(player => (
          <tr key={player.id}>
            <td>
              <Link to={`/players/${player.name}`}>
                <Image
                  src={`/images/userpics/${player.userpic}`}
                  width="24"
                  height="24"
                  circle
                />
              </Link>{" "}
              <Link
                to={`/players/${player.name}`}
                style={{ fontWeight: player.winner ? "bold" : "normal" }}
              >
                {player.name}
              </Link>{" "}
              {player.wonmoney && (
                <Label bsStyle="success">
                  +{" "}
                  <FormattedNumber
                    options={{ style: "currency" }}
                    value={player.wonmoney}
                  />
                </Label>
              )}
            </td>

            <th style={{ textAlign: "center", width: "1.5em" }}>
              {player.wongames.reduce((total, count) => total + count, 0)}
            </th>

            {player.wongames.map((count, index) => (
              <td
                className="hidden-xs"
                key={gameLetters[index]}
                style={{ textAlign: "center", width: "1.5em" }}
              >
                {count}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    <Form inline style={{ textAlign: "center" }}>
      <FormGroup>
        <LinkContainer to={`/set/${props.game.id}`}>
          <Button bsSize="large">
            <Glyphicon glyph="eye-open" />{" "}
            <FormattedMessage
              id="global.viewgame.button"
              description="View game button label"
              defaultMessage="View Game"
            />
          </Button>
        </LinkContainer>
      </FormGroup>{" "}
      <FormGroup>
        <LinkContainer to={`/set/${props.game.id}`}>
          <Button bsSize="large">
            <Glyphicon glyph="share" />{" "}
            <FormattedMessage
              id="global.sharegame.button"
              description="Share game button label"
              defaultMessage="Share Game"
            />
          </Button>
        </LinkContainer>
      </FormGroup>
    </Form>
  </Well>
);

SetTile.propTypes = {
  game: shape({
    id: number.isRequired,
    players: arrayOf(
      shape({
        name: string.isRequired,
        userpic: string.isRequired,
        wongames: arrayOf(number),
        wonmoney: number,
        winner: bool
      })
    ).isRequired
  }).isRequired
};

export default SetTile;
