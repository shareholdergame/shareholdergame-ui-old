import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Media, Panel, Badge, Glyphicon, Image, Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';

class App extends Component {
  STARTYEAR = 2013; // copyright start year
  YEAR = 2018; // current year
  inverse = false; // navbar style

  render() {
    return (
      <Grid fluid>
        <Row>
          <Navbar inverse={this.inverse}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Shareholder</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">New Game</NavItem>
                <NavItem eventKey={2} href="#">My Games</NavItem>
                <NavItem eventKey={2} href="#">Players</NavItem>
                <NavItem eventKey={2} href="#">Game Archive</NavItem>
                <NavItem eventKey={2} href="#">Rules</NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem href="#">
                  <Glyphicon glyph="envelope" /> <Badge bsStyle="success">2</Badge>
                </NavItem>
                <NavItem href="#">
                  <Glyphicon glyph="info-sign" /> <Badge>3</Badge>
                </NavItem>
                <NavItem href="#">
                  Sergey Chernyshev <Glyphicon glyph="user" />
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>

        <Row style={{ paddingBottom: '1em' }}>
          <Col xs={12} md={6}>
            <Button bsSize="large" bsStyle="success" block>Start New Game</Button>
          </Col>
          <Col xs={12} md={6}>
            <Button bsSize="large" block>Select Game Variant</Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <Panel>
              <Panel.Heading>Activity</Panel.Heading>
              <Panel.Body>

                <Media>
                  <Media.Left>
                    <Image src={logo} width="48" height="48" circle />
                  </Media.Left>
                  <Media.Body>
                    <div className="pull-right" style={{ marginLeft: '1em' }}>
                      <Button bsSize="small" bsStyle="success">Accept</Button> <Button bsSize="small" bsStyle="danger">Regect</Button>
                    </div>
                    <Media.Heading>Alkonaft invites you to play</Media.Heading>
                    <p>
                      Game 4 x 6 / 10 total turns
                    </p>
                  </Media.Body>
                </Media>

                <Media>
                  <Media.Left>
                    <Image src={logo} width="48" height="48" circle />
                  </Media.Left>
                  <Media.Body>
                    <Button className="pull-right" style={{ marginLeft: '1em' }} bsSize="small" bsStyle="success">Make Your Move</Button>
                    <Media.Heading>Alkonaft vs. Sergey Chernyshev</Media.Heading>
                    <p>
                      Turn 4.1: You turn
                    </p>

                  </Media.Body>
                </Media>

                <Media>
                  <Media.Left>
                    <Image src={logo} width="48" height="48" circle />
                  </Media.Left>
                  <Media.Body>
                    <Button className="pull-right" style={{ marginLeft: '1em' }} bsSize="small" bsStyle="info">View Game</Button>
                    <Media.Heading>Sergey Chernyshev vs. Alkonaft</Media.Heading>
                    <p>
                      Congratulations, you won!
                    </p>
                  </Media.Body>
                </Media>

              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={6} md={6}>
            <Panel>
              <Panel.Heading>On-line Players</Panel.Heading>
              <Panel.Body>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Heading>Global Chat</Panel.Heading>
              <Panel.Body>

              </Panel.Body>
            </Panel>
          </Col>
        </Row>
        <Row>
          <footer className={this.inverse ? 'footer navbar navbar-inverse' : 'footer navbar navbar-default'}>
            <div className="container">
              <ul className="nav navbar-nav pull-left">
                <li>
                  <a href="/">
                    {this.STARTYEAR}-{this.YEAR} &copy; Shareholder Game
                  </a>
                </li>
                {/* <li><a href="/privacy_policy.php">Privacy Policy</a></li> */}
              </ul>
            </div>
          </footer>
        </Row>
      </Grid>
    );
  }
}

export default App;
