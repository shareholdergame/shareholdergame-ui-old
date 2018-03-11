import React from "react";
import { PageHeader } from "react-bootstrap";
import { shape, string } from "prop-types";

import GameTypeSelector from "./GameTypeSelector";

const NewGame = ({ match }) => (
  <div>
    <PageHeader>Select Game Settings</PageHeader>

    {(!match.params.slug || match.params.slug === "4x6") && (
      <GameTypeSelector
        type={
          <div>
            <p style={{ fontSize: "1.5em" }}>4 x 6</p>
            <p>10 turns</p>
          </div>
        }
        description={
          <div>
            <p>Standard game settings.</p>
            <p>Good for regular games and tournaments.</p>
          </div>
        }
        currentlyPlayed={15}
        slug="4x6"
        invitations={1}
      />
    )}

    {(!match.params.slug || match.params.slug === "3x5") && (
      <GameTypeSelector
        type={
          <div>
            <p style={{ fontSize: "1.5em" }}>3 x 5</p>
            <p>8 turns</p>
          </div>
        }
        description={
          <div>
            <p>Short game configuration.</p>
            <p>Good for beginners and training.</p>
          </div>
        }
        currentlyPlayed={15}
        slug="3x5"
        invitations={5}
        unfinished={1}
      />
    )}

    {(!match.params.slug || match.params.slug === "custom") && (
      <GameTypeSelector
        type="Custom"
        description={
          <div>
            <p>Game experiments.</p>
            <p>3+ players</p>
          </div>
        }
      />
    )}
  </div>
);

NewGame.propTypes = {
  match: shape({
    params: shape({
      slug: string.isRequired
    })
  })
};

NewGame.defaultProps = {
  match: {}
};

export default NewGame;
