import React, { Component } from 'react';
import {
    Navbar, NavItem, Nav,
    NavDropdown,
    MenuItem,
    Badge, Glyphicon,
    Image,
    Row
} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        const profileMenu = <span>
            Sergey Chernyshev
            <Image alt="Sergey Chernyshev userpic"
                style={{ marginLeft: '0.5em' }}
                src="/images/userpics/avatar_137.jpg"
                width="20" height="20" circle
            />
        </span>
        const usDropdownFlag = <img src="/images/flags/us_flag.svg" alt="US flag" style={{ height: '1em' }} />
        return (
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
        );
    }
}

export default Navigation;
