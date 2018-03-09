import React from "react";
import { PageHeader } from "react-bootstrap";

import GameTypeSelector from "./GameTypeSelector";

const NewGame = () => (
  <div>
    <PageHeader>Select Game Settings</PageHeader>

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

    <GameTypeSelector
      type="Custom"
      description={
        <div>
          <p>Game experiments.</p>
          <p>3+ players</p>
        </div>
      }
    />
  </div>
);

NewGame.propTypes = {};

export default NewGame;
