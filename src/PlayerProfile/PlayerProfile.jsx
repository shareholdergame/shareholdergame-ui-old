import React from "react";
import { string, number, shape } from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import {
  ButtonGroup,
  Button,
  Glyphicon,
  Well,
  Image,
  Row,
  Col
} from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import TwitterFieldRenderer from "./TwitterFieldRenderer";

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
    slug: "bancruptcies",
    title: "Bankruptcies"
  }
];

const fields = [
  { slug: "birthday", title: "Birthday" },
  { slug: "country", title: "Country" },
  { slug: "state", title: "Province / State" },
  { slug: "city", title: "City" },
  {
    slug: "facebook",
    title: "Facebook",
    value: { id: "sergey.chernyshev", slug: "sergey.chernyshev" }
  },
  {
    slug: "twitter",
    title: "Twitter",
    value: "sergeyche"
  },
  {
    slug: "googleplus",
    title: "Google+",
    value: "SergeyChernyshev"
  },
  {
    slug: "website",
    title: "Website",
    value: "https://www.sergeychernyshev.com/"
  }
];

const renderers = {
  facebook: value => (
    <a
      href={`https://www.facebook.com/${value.slug}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value.id}
    </a>
  ),
  twitter: TwitterFieldRenderer
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
          </div>

          <blockquote style={{ margin: "1em 0" }}>
            I am a cool gamer!
          </blockquote>

          {props.player.stats && (
            <section>
              <h4>
                <Glyphicon glyph="stats" /> Player Statistics
              </h4>

              <dl className="dl-horizontal">
                {stats.reduce((components, stat) => {
                  components.push(
                    <dt key={`${stat.slug}_dt`}>{stat.title}</dt>
                  );
                  components.push(
                    <dd key={`${stat.slug}_dd`}>{stat.value}</dd>
                  );

                  return components;
                }, [])}
              </dl>
            </section>
          )}

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
                  let { value } = field;
                  const Renderer = renderers[field.slug];

                  // console.log(Renderer);

                  if (Renderer) {
                    value = <Renderer value={value} />;
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

            <LinkContainer to={`/players/${props.player.id}/achievements`}>
              <Button>Games Shared With Me</Button>
            </LinkContainer>
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
    userpic: string.isRequired
  })
};

PlayerProfile.defaultProps = {
  player: null
};

export default connect((state, ownProps) => ({
  player: state.home.players.find(
    player => player.name === ownProps.match.params.name
  )
}))(PlayerProfile);
