import React, { Component } from 'react';
import {
  Navbar, NavItem, Nav,
  NavDropdown,
  MenuItem,
  Table, Panel,
  ButtonGroup, Button,
  Badge, Glyphicon,
  Image,
  Grid, Row, Col,
  FormControl,
  Well
} from 'react-bootstrap';

import './App.css';

class App extends Component {
  STARTYEAR = 2013; // copyright start year
  YEAR = 2018; // current year

  render() {
    const profileMenu = <span>
      Sergey Chernyshev
      <Image
        alt="Sergey Chernyshev userpic"
        style={{ marginLeft: '0.5em' }}
        src="/images/userpics/avatar_137.jpg"
        width="20" height="20" circle />
    </span>
    const usDropdownFlag = <img src="/images/flags/us_flag.svg" alt="US flag" style={{ height: '1em' }} />
    return (
      <Grid fluid>
        <Row>
          <Navbar fluid className="navbar-narrow hidden-xs" inverse style={{ marginBottom: 0 }}>
            <Nav pullRight>
              <NavDropdown eventKey="4" title={usDropdownFlag} id="nav-dropdown">
                <MenuItem eventKey="4.1">
                  <img alt="US flag" src="/images/flags/us_flag.svg" style={{ width: '1.5em', verticalAlign: 'baseline' }} />
                  <span style={{ marginLeft: '1em' }}>English (United States)</span>
                </MenuItem>
                <MenuItem eventKey="4.1">
                  <img alt="Russian flag" src="/images/flags/ru_flag.svg" style={{ width: '1.5em', verticalAlign: 'baseline' }} />
                  <span style={{ marginLeft: '1em' }}>Russian</span>
                </MenuItem>
              </NavDropdown>
              <NavItem href="#">
                <Glyphicon glyph="user" /><Glyphicon glyph="plus" /> <Badge bsStyle="success">2</Badge>
              </NavItem>
              <NavItem href="#">
                <Glyphicon glyph="envelope" /> <Badge>3</Badge>
              </NavItem>
              <NavDropdown eventKey="4" title={profileMenu} id="nav-dropdown">
                <MenuItem eventKey="4.1">My Achievements</MenuItem>
                <MenuItem eventKey="4.2">My Profile</MenuItem>
                <MenuItem eventKey="4.3">Account Settings</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4.4">Sign Out</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>

          <Navbar fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home"><img className="align-top"
                  alt="Stockholder game logo"
                  style={{ height: '1em' }}
                  src="/images/logo.png" /></a>
              </Navbar.Brand>
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
                <NavItem eventKey={2} href="#">Forum</NavItem>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Nav pullRight className="visible-xs">
                <NavItem eventKey="4.1">
                  <Glyphicon glyph="ok" className="pull-right" />
                  <img alt="US flag" src="/images/flags/us_flag.svg" style={{ width: '1.5em', verticalAlign: 'baseline' }} />
                  <span style={{ marginLeft: '1em' }}>English (United States)</span>
                </NavItem>
                <NavItem eventKey="4.1">
                  <img alt="Russian flag" src="/images/flags/ru_flag.svg" style={{ width: '1.5em', verticalAlign: 'baseline' }} />
                  <span style={{ marginLeft: '1em' }}>Russian</span>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Nav pullRight className="visible-xs">
                <NavItem href="#">
                  <Badge pullRight>2</Badge>
                  Invitations <Glyphicon glyph="user" /><Glyphicon glyph="plus" />
                </NavItem>
                <NavItem href="#">
                  <Badge pullRight>3</Badge>
                  Messages <Glyphicon glyph="envelope" />
                </NavItem>
                <NavDropdown eventKey="4" title={profileMenu} id="nav-dropdown">
                  <MenuItem eventKey="4.1">My Achievements</MenuItem>
                  <MenuItem eventKey="4.2">My Profile</MenuItem>
                  <MenuItem eventKey="4.3">Account Settings</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4.4">Sign Out</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


        </Row>

        <Row style={{ paddingBottom: '1em' }}>
          <Col xs={12} md={6}>
            <Button bsSize="large" bsStyle="success" block>Start New Game</Button>
          </Col>
          <Col xs={12} md={6}>
            <Button bsSize="large" block>Game Options</Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <Panel>
              <Panel.Heading>Activity</Panel.Heading>
              <Panel.Body style={{ padding: 0 }}>
                <Table striped style={{ margin: 0 }}>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <Image src="/images/userpics/avatar_7.jpg" width="48" height="48" circle />
                      </td>
                      <td>
                        <Row>
                          <Col xs={12} sm={6}>
                            <b>Зырянов invites you to play</b>
                            <p>Game 4 x 6 / 10 total turns</p>
                          </Col>
                          <Col xs={12} sm={6} className="activity-actions">
                            <ButtonGroup>
                              <Button bsStyle="success"><Glyphicon glyph="ok" /> Accept</Button>
                              <Button bsStyle="danger"><Glyphicon glyph="remove" /> Reject</Button>
                            </ButtonGroup>
                          </Col>
                        </Row>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <Image src="/images/userpics/avatar_1.png" width="48" height="48" circle />
                      </td>
                      <td>
                        <Row>
                          <Col xs={12} sm={6}>
                            <b>Admin vs. Sergey Chernyshev</b>
                            <p>Turn 4.1: Your turn</p>
                          </Col>
                          <Col xs={12} sm={6} className="activity-actions">
                            <Button bsStyle="primary">
                              Make Your Move <Glyphicon glyph="log-in" />
                            </Button>
                          </Col>
                        </Row>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ textAlign: 'center' }}>
                        <Image src="/images/userpics/avatar_8.jpg" width="48" height="48" circle />
                      </td>
                      <td>
                        <Row>
                          <Col xs={12} sm={6}>
                            <b>Sergey Chernyshev vs. Governor</b>
                            <p>Congratulations, you won!</p>
                          </Col>
                          <Col xs={12} sm={6} className="activity-actions">
                            <Button bsStyle="info">
                              <Glyphicon glyph="eye-open" /> View Game
                            </Button>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>

              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={12} md={6}>
            <Panel>
              <Panel.Heading>Players On-line</Panel.Heading>
              <Panel.Body style={{ padding: 0 }}>
                <Table striped style={{ margin: 0 }}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'middle' }}>
                        <Image src="/images/userpics/avatar_42.jpg" width="36" height="36" circle /> Михаил
                      </td>
                      <td style={{ verticalAlign: 'middle' }} align="right">
                        <ButtonGroup>
                          <Button bsSize="small" bsStyle="default"><Glyphicon glyph="envelope" /> Send Message</Button>
                          <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="user" /><Glyphicon glyph="plus" /> Invite</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: 'middle' }}>
                        <Image src="/images/userpics/default_avatar.png" width="36" height="36" circle /> Alkonaft
                      </td>
                      <td style={{ verticalAlign: 'middle' }} align="right">
                        <ButtonGroup>
                          <Button bsSize="small" bsStyle="default"><Glyphicon glyph="envelope" /> Send Message</Button>
                          <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="user" /><Glyphicon glyph="plus" /> Invite</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: 'middle' }}>
                        <Image src="/images/userpics/avatar_5.png" width="36" height="36" circle /> Andrew
                      </td>
                      <td style={{ verticalAlign: 'middle' }} align="right">
                        <ButtonGroup>
                          <Button bsSize="small" bsStyle="default"><Glyphicon glyph="envelope" /> Send Message</Button>
                          <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="user" /><Glyphicon glyph="plus" /> Invite</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  </tbody>
                </Table>

              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Heading>Global Chat <Glyphicon glyph="envelope" /></Panel.Heading>
              <Panel.Body style={{ padding: 0 }}>
                <Well style={{ marginBottom: 0 }}>
                  <p>
                    <span style={{ color: 'blue' }}>Зырянов:</span> Bacon ipsum dolor amet ribeye corned beef chuck, shoulder cow frankfurter landjaeger prosciutto kielbasa burgdoggen chicken alcatra flank. Sirloin strip steak pork pork loin, ground round biltong ham hock short loin rump venison pastrami flank jerky beef ribs cow. Kielbasa burgdoggen andouille boudin, turkey t-bone alcatra. Short ribs jerky venison tail hamburger ground round. Meatball turducken ball tip, pork loin chuck drumstick chicken.
                  </p>
                  <p>
                    <span style={{ color: 'blue' }}>Sergey Chernyshev:</span> Ribeye tongue shoulder prosciutto picanha strip steak brisket turducken pork belly corned beef. Strip steak swine tongue turkey alcatra t-bone fatback pork belly. Turkey sausage cupim rump boudin. Cupim ham drumstick rump, turkey boudin pastrami tongue ball tip. Tail beef ribs picanha, filet mignon kielbasa turkey ribeye porchetta pork chop t-bone cupim meatball capicola fatback. Landjaeger rump spare ribs shankle frankfurter doner flank kielbasa venison cupim ham tongue jerky.
                  </p>
                </Well>
                <FormControl style={{ height: '5em' }} componentClass="textarea" placeholder="type your message here ..." />
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
        <Row>
          <footer className="footer navbar navbar-inverse">
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
