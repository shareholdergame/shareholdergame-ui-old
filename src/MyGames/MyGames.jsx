import React from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Tabs,
  Tab,
  ToggleButton,
  ToggleButtonGroup,
  Row,
  Grid,
  Col,
  InputGroup,
  Alert
} from "react-bootstrap";
import { connect } from "react-redux";
import { func, arrayOf, shape, number } from "prop-types";
import {
  FormattedMessage,
  FormattedHTMLMessage,
  injectIntl,
  intlShape,
  defineMessages
} from "react-intl";

import { performGameSearch } from "../store/games";

import GameTile from "./GameTile";

const messages = defineMessages({
  placeholder: {
    id: "mygames.search.placeholder",
    description: "Player name placeholder on game search page",
    defaultMessage: "type player name here ..."
  },
  gameslabel: {
    id: "mygames.tabs.games",
    description: "Games tab label on my games page",
    defaultMessage: "Games"
  },
  invitationslabel: {
    id: "mygames.tabs.invitations",
    description: "Invitations tab label on archive page",
    defaultMessage: "Invitations"
  }
});

class MyGames extends React.Component {
  static propTypes = {
    performGameSearch: func.isRequired,
    self: shape({
      id: number
    }),
    games: arrayOf(
      shape({
        id: number.isRequired
      })
    ).isRequired,
    intl: intlShape.isRequired
  };

  static defaultProps = {
    self: null
  };

  constructor(props, context) {
    super(props, context);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      filter: "all",
      search: ""
    };
  }

  handleFilterChange(e) {
    this.setState({ filter: e, search: "" });
  }

  handleSearchChange(e) {
    if (e && e.target.value) {
      this.setState({ filter: "", search: e.target.value });
    } else {
      this.setState({ filter: "all", search: "" });
    }
    e.preventDefault();
  }

  handleSearch(e) {
    this.props.performGameSearch(e.value);
    e.preventDefault();
  }

  render() {
    const filteredGames = this.props.games.filter(game => {
      // no filter
      if (this.state.filter === "all") {
        return true;
      }

      // search
      if (this.state.filter === "") {
        return (
          typeof game.players
            .filter(player => player.id !== this.props.self.id)
            .find(player => player.name.indexOf(this.state.search) >= 0) !==
          "undefined"
        );
      }

      if (this.state.filter === "4x6") {
        return (
          game.players.length === 2 &&
          game.options.major === 4 &&
          game.options.minor === 6
        );
      }

      if (this.state.filter === "3x5") {
        return (
          game.players.length === 2 &&
          game.options.major === 3 &&
          game.options.minor === 5
        );
      }

      if (this.state.filter === "custom") {
        return (
          game.players.length !== 2 ||
          (game.options.major !== 3 &&
            game.options.major !== 4 &&
            game.options.minor !== 5 &&
            game.options.minor !== 6)
        );
      }

      // same as "all"
      return true;
    });

    return (
      this.props.self && (
        <Tabs defaultActiveKey="games" id="uncontrolled-tab-example">
          <Tab
            eventKey="games"
            title={this.props.intl.formatMessage(messages.gameslabel)}
          >
            <Grid fluid>
              <Row>
                <Col>
                  <Form
                    inline
                    style={{ padding: "1em" }}
                    onSubmit={this.handleSearch}
                  >
                    <FormGroup controlId="quickFilter">
                      <ControlLabel
                        style={{ marginRight: "1em" }}
                        className="hidden-xs"
                      >
                        <FormattedMessage
                          id="mygames.filter.quickfilter"
                          description="Game quick filter label"
                          defaultMessage="Quick Filter"
                        />
                      </ControlLabel>{" "}
                      <ToggleButtonGroup
                        name="filter"
                        value={this.state.filter}
                        type="radio"
                        onChange={this.handleFilterChange}
                      >
                        <ToggleButton value="all" active>
                          <FormattedMessage
                            id="mygames.filter.all"
                            description="All filter label"
                            defaultMessage="All"
                          />
                        </ToggleButton>
                        <ToggleButton
                          value="4x6"
                          disabled={
                            this.props.games.filter(
                              game =>
                                game.players.length === 2 &&
                                game.options.major === 4 &&
                                game.options.minor === 6
                            ).length === 0
                          }
                        >
                          4 x 6
                        </ToggleButton>
                        <ToggleButton
                          value="3x5"
                          disabled={
                            this.props.games.filter(
                              game =>
                                game.players.length === 2 &&
                                game.options.major === 3 &&
                                game.options.minor === 5
                            ).length === 0
                          }
                        >
                          3 x 5
                        </ToggleButton>

                        <ToggleButton
                          value="custom"
                          disabled={
                            this.props.games.filter(
                              game =>
                                game.players.length !== 2 ||
                                (game.options.major !== 3 &&
                                  game.options.major !== 4 &&
                                  game.options.minor !== 5 &&
                                  game.options.minor !== 6)
                            ).length === 0
                          }
                        >
                          <span className="hidden-xs">
                            <FormattedMessage
                              id="mygames.filter.custom"
                              description="Custom filter label"
                              defaultMessage="Custom"
                            />
                          </span>
                          <span className="visible-xs-inline">
                            <FormattedMessage
                              id="mygames.filter.custom.short"
                              description="Short version of custom filter label"
                              defaultMessage="Custom"
                            />
                          </span>
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </FormGroup>{" "}
                    <FormGroup>
                      <InputGroup>
                        <FormControl
                          type="search"
                          value={this.state.search}
                          placeholder={this.props.intl.formatMessage(
                            messages.placeholder
                          )}
                          onChange={this.handleSearchChange}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>

              {filteredGames.length !== this.props.games.length && (
                <Alert
                  bsStyle="info"
                  onClick={this.handleSearchChange}
                  onDismiss={this.handleSearchChange}
                >
                  <FormattedHTMLMessage
                    id="mygames.filter.info"
                    description="Info message indicating that games are filtered"
                    defaultMessage="Showing <strong>{showing} of {total}</strong> games."
                    values={{
                      total: this.props.games.length,
                      showing: filteredGames.length
                    }}
                  />
                </Alert>
              )}

              <Row>
                {filteredGames.map(game => (
                  <Col md={6} key={game.id}>
                    <GameTile game={game} self={this.props.self} />
                  </Col>
                ))}
              </Row>
            </Grid>
          </Tab>
          <Tab
            eventKey="invitations"
            title={this.props.intl.formatMessage(messages.invitationslabel)}
          >
            <i>... Invitations will show up here ...</i>
          </Tab>
        </Tabs>
      )
    );
  }
}

export default connect(
  state => ({
    games: state.games.found_games,
    self: state.self.self
  }),
  dispatch => ({
    performGameSearch: keyword => {
      dispatch(performGameSearch(keyword));
    }
  })
)(injectIntl(MyGames));
