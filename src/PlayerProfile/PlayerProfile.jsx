import React from "react";
import { string, number, shape, bool } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Well from "react-bootstrap/lib/Well";
import Image from "react-bootstrap/lib/Image";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import TwitterField from "./TwitterField";
import FacebookField from "./FacebookField";
import GooglePlusField from "./GooglePlusField";
import WebsiteField from "./WebsiteField";

const stats = [
  {
    slug: "total",
    title: "Total Played"
  },
  {
    slug: "won",
    title: "Games Won"
  },
  {
    slug: "lost",
    title: "Games Lost"
  },
  {
    slug: "bankruptcies",
    title: "Bankruptcies"
  }
];

const fields = [
  { slug: "birthday", title: "Birthday" },
  { slug: "country", title: "Country" },
  { slug: "state", title: "Province / State" },
  { slug: "city", title: "City" },
  { slug: "facebook", title: "Facebook" },
  { slug: "twitter", title: "Twitter" },
  { slug: "googleplus", title: "Google+" },
  { slug: "website", title: "Website" }
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
            {!props.isSelf && (
              <ButtonGroup block vertical>
                <Button>
                  <Glyphicon glyph="heart-empty" />{" "}
                  <FormattedMessage
                    id="profile.addfriend"
                    description="Add friend button label on profile page"
                    defaultMessage="Add as friend"
                  />
                </Button>
                <Button>
                  <Glyphicon glyph="user" />
                  <Glyphicon glyph="plus" />{" "}
                  <FormattedMessage
                    id="home.playersearch.invite"
                    description="Player search invitation button label"
                    defaultMessage="Invite"
                  />
                </Button>
                <Button>
                  <Glyphicon glyph="envelope" />{" "}
                  <FormattedMessage
                    id="home.playersearch.sendmessage"
                    description="Player search send message button label"
                    defaultMessage="Send Message"
                  />
                </Button>
              </ButtonGroup>
            )}
          </div>

          <blockquote style={{ margin: "1em 0" }}>
            I am a cool gamer!
          </blockquote>

          <section>
            <h4>
              <Glyphicon glyph="stats" /> Player Statistics
            </h4>

            <dl className="dl-horizontal">
              {stats.reduce((components, stat) => {
                components.push(<dt key={`${stat.slug}_dt`}>{stat.title}</dt>);

                const value =
                  props.player.stats && props.player.stats[stat.slug]
                    ? props.player.stats[stat.slug]
                    : 0;

                components.push(<dd key={`${stat.slug}_dd`}>{value}</dd>);

                return components;
              }, [])}
            </dl>
          </section>

          {props.player.profile && (
            <section>
              <h4>
                <Glyphicon glyph="user" /> Profile information
              </h4>

              <dl
                className="dl-horizontal"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis"
                }}
              >
                {fields.reduce((components, field) => {
                  let value = props.player.profile[field.slug];

                  if (!value) {
                    return components;
                  }

                  const Renderer = renderers[field.slug];

                  if (Renderer) {
                    value = <Renderer {...value} />;
                  }

                  components.push(
                    <dt key={`${field.slug}_dt`}>{field.title}</dt>
                  );
                  components.push(<dd key={`${field.slug}_dd`}>{value}</dd>);

                  return components;
                }, [])}
              </dl>
            </section>
          )}

          <ButtonGroup block vertical>
            <LinkContainer to={`/players/${props.player.id}/achievements`}>
              <Button>Achievements</Button>
            </LinkContainer>

            {!props.isSelf && (
              <LinkContainer to={`/players/${props.player.id}/achievements`}>
                <Button>Games Shared With Me</Button>
              </LinkContainer>
            )}
          </ButtonGroup>
        </Well>
      </Col>
      <Col sm={6}>
        <h2>Friend Requests</h2>
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
  isSelf: bool.isRequired
};

PlayerProfile.defaultProps = {
  player: null
};

export default connect((state, ownProps) => ({
  player: state.home.players.find(
    player => player.name === ownProps.match.params.name
  ),
  isSelf: state.self.self && state.self.self.name === ownProps.match.params.name
}))(PlayerProfile);
