import React from "react";
import {
  Glyphicon,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Tabs,
  Tab,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Row,
  Grid,
  Col,
  InputGroup
} from "react-bootstrap";
import { connect } from "react-redux";
import { func, arrayOf, shape, number } from "prop-types";

import { performGameSearch } from "../store/games";

import GameTile from "./GameTile";

class MyGames extends React.Component {
  static propTypes = {
    performGameSearch: func.isRequired,
    games: arrayOf(
      shape({
        id: number.isRequired
      })
    ).isRequired
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
    this.setState({ filter: "", search: e.target.value });
    e.preventDefault();
  }

  handleSearch(e) {
    this.props.performGameSearch(e.value);
    e.preventDefault();
  }

  render() {
    return (
      <Tabs defaultActiveKey="games" id="uncontrolled-tab-example">
        <Tab eventKey="games" title="Games">
          <Grid fluid>
            <Row>
              <Col>
                <Form
                  inline
                  style={{ padding: "1em" }}
                  onSubmit={this.handleSearch}
                >
                  <FormGroup controlId="quickFilter">
                    <ControlLabel style={{ margin: "0 2em" }}>
                      Quick Filter
                    </ControlLabel>{" "}
                    <ToggleButtonGroup
                      name="filter"
                      value={this.state.filter}
                      type="radio"
                      onChange={this.handleFilterChange}
                    >
                      <ToggleButton value="all" active>
                        All
                      </ToggleButton>
                      <ToggleButton value="4x6">4 x 6</ToggleButton>
                      <ToggleButton value="3x5">3 x 5</ToggleButton>
                      <ToggleButton value="custom">Custom</ToggleButton>
                    </ToggleButtonGroup>
                  </FormGroup>{" "}
                  <FormGroup>
                    <InputGroup>
                      <FormControl
                        type="search"
                        value={this.state.search}
                        placeholder="type player name here"
                        onChange={this.handleSearchChange}
                      />
                      <InputGroup.Button>
                        <Button type="submit" disabled={!this.state.search}>
                          <Glyphicon glyph="search" /> Search
                        </Button>
                      </InputGroup.Button>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              {this.props.games.map(game => (
                <Col md="6">
                  <GameTile game={game} />
                </Col>
              ))}
            </Row>
          </Grid>
        </Tab>
        <Tab eventKey="invitations" title="Invitations">
          <i>... Invitations will show up here ...</i>
        </Tab>
      </Tabs>
    );
  }
}

export default connect(
  state => ({
    games: state.games.found_games
  }),
  dispatch => ({
    performGameSearch: keyword => {
      dispatch(performGameSearch(keyword));
    }
  })
)(MyGames);
