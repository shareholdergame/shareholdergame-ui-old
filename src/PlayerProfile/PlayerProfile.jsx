import React from "react";
import { arrayOf, string, number, shape, bool } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Well from "react-bootstrap/lib/Well";
import Image from "react-bootstrap/lib/Image";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Panel from "react-bootstrap/lib/Panel";

import {
  FormattedMessage,
  injectIntl,
  intlShape,
  defineMessages
} from "react-intl";

import { connect } from "react-redux";

import TwitterField from "./TwitterField";
import FacebookField from "./FacebookField";
import GooglePlusField from "./GooglePlusField";
import WebsiteField from "./WebsiteField";
import PlayersList from "../PlayersList";

const messages = defineMessages({
  total: {
    id: "profile.stats.total",
    description: "Total games played stat label",
    defaultMessage: "Total Played"
  },
  won: {
    id: "profile.stats.won",
    description: "Games won stat label",
    defaultMessage: "Games Won"
  },
  lost: {
    id: "profile.stats.lost",
    description: "Games lost stat label",
    defaultMessage: "Games Lost"
  },
  bankruptcies: {
    id: "profile.stats.bankruptcies",
    description: "Bankruptcies stat label",
    defaultMessage: "Bankruptcies"
  },
  birthday: {
    id: "profile.field.birthday",
    description: "Birthday field label",
    defaultMessage: "Birthday"
  },
  country: {
    id: "profile.field.country",
    description: "Country field label",
    defaultMessage: "Country"
  },
  state: {
    id: "profile.field.state",
    description: "State field label",
    defaultMessage: "Province / State"
  },
  city: {
    id: "profile.field.city",
    description: "City field label",
    defaultMessage: "City"
  },
  facebook: {
    id: "profile.field.facebook",
    description: "Facebook field label",
    defaultMessage: "Facebook"
  },
  twitter: {
    id: "profile.field.twitter",
    description: "Twitter field label",
    defaultMessage: "Twitter"
  },
  googleplus: {
    id: "profile.field.googleplus",
    description: "Google+ field label",
    defaultMessage: "Google+"
  },
  website: {
    id: "profile.field.website",
    description: "Website field label",
    defaultMessage: "Website"
  }
});

const stats = ["total", "won", "lost", "bankruptcies"];

const fields = [
  "birthday",
  "country",
  "state",
  "city",
  "facebook",
  "twitter",
  "googleplus",
  "website"
];

const renderers = {
  facebook: FacebookField,
  twitter: TwitterField,
  googleplus: GooglePlusField,
  website: WebsiteField
};

const PlayerProfile = props =>
  props.player ? (
    <Row>
      <Col sm={6}>
        <Well>
          <div style={{ textAlign: "center" }}>
            <Image
              src={`/images/userpics/${props.player.userpic}`}
              width="120"
              height="120"
              circle
            />
            <h1>{props.player.name}</h1>
            <ButtonGroup block vertical>
              {!props.isSelf && (
                <Button bsStyle="success">
                  <Glyphicon glyph="heart-empty" />{" "}
                  <FormattedMessage
                    id="profile.addfriend"
                    description="Add friend button label on profile page"
                    defaultMessage="Add as friend"
                  />
                </Button>
              )}
              {!props.isSelf && (
                <Button bsStyle="primary">
                  <Glyphicon glyph="user" />
                  <Glyphicon glyph="plus" />{" "}
                  <FormattedMessage
                    id="home.playersearch.invite"
                    description="Player search invitation button label"
                    defaultMessage="Invite"
                  />
                </Button>
              )}
              {!props.isSelf && (
                <Button>
                  <Glyphicon glyph="envelope" />{" "}
                  <FormattedMessage
                    id="home.playersearch.sendmessage"
                    description="Player search send message button label"
                    defaultMessage="Send Message"
                  />
                </Button>
              )}

              {props.isSelf && (
                <Button>
                  <Glyphicon glyph="pencil" />{" "}
                  <FormattedMessage
                    id="profile.edit"
                    description="Edit profile button label"
                    defaultMessage="Edit profile"
                  />
                </Button>
              )}
            </ButtonGroup>
          </div>

          {props.player.profile &&
            props.player.profile.description && (
              <blockquote style={{ margin: "1em 0" }}>
                {props.player.profile.description}
              </blockquote>
            )}

          <section>
            <h4>
              <Glyphicon glyph="stats" />{" "}
              <FormattedMessage
                id="profile.statsheader"
                description="Player statistics header"
                defaultMessage="Player Statistics"
              />
            </h4>

            <dl className="dl-horizontal">
              {stats.reduce((components, statSlug) => {
                components.push(
                  <dt key={`${statSlug}_dt`}>
                    {props.intl.formatMessage(messages[statSlug])}
                  </dt>
                );

                const value =
                  props.player.stats && props.player.stats[statSlug]
                    ? props.player.stats[statSlug]
                    : 0;

                components.push(<dd key={`${statSlug}_dd`}>{value}</dd>);

                return components;
              }, [])}
            </dl>
          </section>

          {props.player.profile && (
            <section>
              <h4>
                <Glyphicon glyph="user" />{" "}
                <FormattedMessage
                  id="profile.infoheader"
                  description="Profile information header"
                  defaultMessage="Profile information"
                />
              </h4>

              <dl
                className="dl-horizontal"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis"
                }}
              >
                {fields.reduce((components, fieldSlug) => {
                  let value = props.player.profile[fieldSlug];

                  if (!value) {
                    return components;
                  }

                  const Renderer = renderers[fieldSlug];

                  if (Renderer) {
                    value = <Renderer {...value} />;
                  }

                  components.push(
                    <dt key={`${fieldSlug}_dt`}>
                      {props.intl.formatMessage(messages[fieldSlug])}
                    </dt>
                  );
                  components.push(<dd key={`${fieldSlug}_dd`}>{value}</dd>);

                  return components;
                }, [])}
              </dl>
            </section>
          )}

          <ButtonGroup block vertical>
            <LinkContainer to={`/players/${props.player.id}/achievements`}>
              <Button>
                <FormattedMessage
                  id="profile.achievements"
                  description="Achievements button label"
                  defaultMessage="Achievements"
                />
              </Button>
            </LinkContainer>

            {!props.isSelf && (
              <LinkContainer to={`/players/${props.player.id}/achievements`}>
                <Button>
                  <FormattedMessage
                    id="profile.gamesshared"
                    description="Games Shared With Me button label"
                    defaultMessage="Games Shared With Me"
                  />
                </Button>
              </LinkContainer>
            )}
          </ButtonGroup>
        </Well>
      </Col>
      <Col sm={6}>
        {props.isSelf &&
          props.friendRequests.length > 0 && (
            <Panel>
              <Panel.Heading>
                <FormattedMessage
                  id="profile.friends.requestsheader"
                  description="Friend Requests section header"
                  defaultMessage="Friend Requests"
                />
              </Panel.Heading>
              <Panel.Body style={{ padding: 0 }}>
                <PlayersList players={props.friendRequests} befriend />
              </Panel.Body>
            </Panel>
          )}

        {props.friends.length > 0 && (
          <Panel>
            <Panel.Heading>
              <FormattedMessage
                id="profile.friends.header"
                description="Friends section header"
                defaultMessage="Friends"
              />
            </Panel.Heading>
            <Panel.Body style={{ padding: 0 }}>
              <PlayersList players={props.friends} message invite />
            </Panel.Body>
          </Panel>
        )}
      </Col>
    </Row>
  ) : (
    "No player found"
  );

PlayerProfile.propTypes = {
  player: shape({
    id: number.isRequired,
    name: string.isRequired,
    userpic: string.isRequired,
    profile: shape(),
    stats: shape({
      total: number,
      won: number,
      lost: number,
      bankruptcies: number
    })
  }),
  isSelf: bool.isRequired,
  friends: arrayOf(shape()).isRequired,
  friendRequests: arrayOf(shape()).isRequired,
  intl: intlShape.isRequired
};

PlayerProfile.defaultProps = {
  player: null
};

export default connect((state, ownProps) => {
  const thisPlayer = state.home.players.find(
    player => player.name === ownProps.match.params.name
  );

  const friends =
    thisPlayer && thisPlayer.friends
      ? thisPlayer.friends.map(friend =>
          state.home.players.find(player => player.name === friend.name)
        )
      : [];

  const friendRequests =
    thisPlayer && thisPlayer.friendRequests
      ? thisPlayer.friendRequests.map(friendRequestor =>
          state.home.players.find(
            player => player.name === friendRequestor.name
          )
        )
      : [];

  return {
    player: thisPlayer,
    friends,
    friendRequests,
    isSelf:
      state.self.self && state.self.self.name === ownProps.match.params.name
  };
})(injectIntl(PlayerProfile));
