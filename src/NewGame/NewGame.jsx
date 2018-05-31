import React from "react";
import PageHeader from "react-bootstrap/lib/PageHeader";
import { shape, string } from "prop-types";
import { FormattedMessage } from "react-intl";

import GameTypeSelector from "./GameTypeSelector";

const NewGame = ({ match }) => (
  <div>
    {!match.params.slug && (
      <PageHeader>
        <FormattedMessage
          id="newgame.title"
          description="Page title / call to action on new game page"
          defaultMessage="Select Game Settings"
        />
      </PageHeader>
    )}

    {(!match.params.slug || match.params.slug === "4x6") && (
      <GameTypeSelector
        type={
          <div>
            <p style={{ fontSize: "1.5em" }}>4 x 6</p>
            <p>
              <FormattedMessage
                id="newgame.turns"
                description="Label indicating number of turns in the game"
                defaultMessage="{turns} turns"
                values={{
                  turns: 10
                }}
              />
            </p>
          </div>
        }
        description={
          <div>
            <p>
              <FormattedMessage
                id="newgame.standard.description1"
                description="Standard game settings description line 1"
                defaultMessage="Standard game settings."
              />
            </p>
            <p>
              <FormattedMessage
                id="newgame.standard.description2"
                description="Standard game settings description line 2"
                defaultMessage="Good for regular games and tournaments."
              />
            </p>
          </div>
        }
        currentlyPlayed={2}
        slug="4x6"
        invitations={3}
      />
    )}

    {(!match.params.slug || match.params.slug === "3x5") && (
      <GameTypeSelector
        type={
          <div>
            <p style={{ fontSize: "1.5em" }}>3 x 5</p>
            <p>
              <FormattedMessage
                id="newgame.turns"
                description="Label indicating number of turns in the game"
                defaultMessage="{turns} turns"
                values={{
                  turns: 8
                }}
              />
            </p>
          </div>
        }
        description={
          <div>
            <p>
              <FormattedMessage
                id="newgame.short.description1"
                description="Short game settings description line 1"
                defaultMessage="Short game configuration."
              />
            </p>
            <p>
              <FormattedMessage
                id="newgame.short.description2"
                description="Short game settings description line 2"
                defaultMessage="Good for beginners and training."
              />
            </p>
          </div>
        }
        currentlyPlayed={15}
        slug="3x5"
        invitations={5}
        unfinished={9}
      />
    )}

    {(!match.params.slug || match.params.slug === "custom") && (
      <GameTypeSelector
        type={
          <FormattedMessage
            id="newgame.custom.title"
            description="Custom game settings title"
            defaultMessage="Custom"
          />
        }
        description={
          <div>
            <p>
              <FormattedMessage
                id="newgame.custom.description1"
                description="Custom game settings description line 1"
                defaultMessage="Game experiments."
              />
            </p>
            <p>
              <FormattedMessage
                id="newgame.custom.description2"
                description="Custom game settings description line 2"
                defaultMessage="3+ players"
              />
            </p>
          </div>
        }
      />
    )}
  </div>
);

NewGame.propTypes = {
  match: shape({
    params: shape({
      slug: string
    })
  })
};

NewGame.defaultProps = {
  match: {}
};

export default NewGame;
