import React from "react";

import { connect } from "react-redux";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { number, shape } from "prop-types";

import { FormattedMessage } from "react-intl";

const Set = ({ gameSet }) =>
  gameSet && (
    <div>
      <Row>
        <Col xs={12}>
          <h1>
            <FormattedMessage
              id="game.header.prefix"
              description="Word game preceding game number"
              defaultMessage="Game"
            />{" "}
            <small>
              <FormattedMessage
                id="global.numbersign"
                description="Number sign"
                defaultMessage="#"
              />
              {Set.SetId}
            </small>
          </h1>
        </Col>
      </Row>

      <h2>Score</h2>
      <Row>
        <Col xs={12}>
          <GameScore Set={Set} game={game} />
        </Col>
      </Row>
    </div>
  );

Set.propTypes = {
  Set: shape({
    id: number
  })
};

Set.defaultProps = {
  Set: null
};

export default connect((state, ownProps) => {
  const Set = state.games.sets.find(
    set => `${set.SetId}` === ownProps.match.params.setSlug
  );

  if (!Set || Set.loading) {
    return {};
  }

  return { Set };
})(Set);
