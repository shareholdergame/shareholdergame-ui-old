import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavItem,
  Nav,
  NavDropdown,
  MenuItem,
  Badge,
  Glyphicon,
  Image,
  Row
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const profileMenu = (
  <span>
    Sergey Chernyshev
    <Image
      alt="Sergey Chernyshev userpic"
      style={{ marginLeft: "0.5em" }}
      src="/images/userpics/avatar_137.jpg"
      width="20"
      height="20"
      circle
    />
  </span>
);

const usDropdownFlag = (
  <img
    src="/images/flags/us_flag.svg"
    alt="US flag"
    style={{ height: "1em" }}
  />
);

const Navigation = () => (
  <Row>
    <Navbar
      fluid
      className="navbar-narrow hidden-xs"
      inverse
      style={{ marginBottom: 0 }}
    >
      <Nav pullRight>
        <NavDropdown eventKey="4" title={usDropdownFlag} id="nav-dropdown">
          <MenuItem eventKey="4.1">
            <img
              alt="US flag"
              src="/images/flags/us_flag.svg"
              style={{ width: "1.5em", verticalAlign: "baseline" }}
            />
            <span style={{ marginLeft: "1em" }}>English (United States)</span>
          </MenuItem>
          <MenuItem eventKey="4.1">
            <img
              alt="Russian flag"
              src="/images/flags/ru_flag.svg"
              style={{ width: "1.5em", verticalAlign: "baseline" }}
            />
            <span style={{ marginLeft: "1em" }}>Russian</span>
          </MenuItem>
        </NavDropdown>
        <NavItem>
          <Glyphicon glyph="user" />
          <Glyphicon glyph="plus" /> <Badge bsStyle="success">2</Badge>
        </NavItem>
        <NavItem>
          <Glyphicon glyph="envelope" /> <Badge>3</Badge>
        </NavItem>
        <NavDropdown eventKey="4" title={profileMenu} id="nav-dropdown">
          <LinkContainer to="/my-achievements">
            <MenuItem>My Achievements</MenuItem>
          </LinkContainer>
          <LinkContainer to="/profile">
            <MenuItem>My Profile</MenuItem>
          </LinkContainer>
          <LinkContainer to="/account">
            <MenuItem>Account Settings</MenuItem>
          </LinkContainer>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Sign Out</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>

    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img
              className="align-top"
              alt="Stockholder game logo"
              style={{ height: "1em" }}
              src="/images/logo.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/">Shareholder</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/new-game">
            <NavItem>New Game</NavItem>
          </LinkContainer>
          <LinkContainer to="/my-games">
            <NavItem>My Games</NavItem>
          </LinkContainer>
          <LinkContainer to="/players">
            <NavItem>Players</NavItem>
          </LinkContainer>
          <LinkContainer to="/archive">
            <NavItem>Game Archive</NavItem>
          </LinkContainer>
          <LinkContainer to="/rules">
            <NavItem>Rules</NavItem>
          </LinkContainer>
          <NavItem href="http://forum.stockholdergame.com/">Forum</NavItem>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Nav pullRight className="visible-xs">
          <NavItem eventKey="4.1">
            <Glyphicon glyph="ok" className="pull-right" />
            <img
              alt="US flag"
              src="/images/flags/us_flag.svg"
              style={{ width: "1.5em", verticalAlign: "baseline" }}
            />
            <span style={{ marginLeft: "1em" }}>English (United States)</span>
          </NavItem>
          <NavItem eventKey="4.1">
            <img
              alt="Russian flag"
              src="/images/flags/ru_flag.svg"
              style={{ width: "1.5em", verticalAlign: "baseline" }}
            />
            <span style={{ marginLeft: "1em" }}>Russian</span>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Nav pullRight className="visible-xs">
          <NavItem>
            <Badge pullRight>2</Badge>
            Invitations <Glyphicon glyph="user" />
            <Glyphicon glyph="plus" />
          </NavItem>
          <NavItem>
            <Badge pullRight>3</Badge>
            Messages <Glyphicon glyph="envelope" />
          </NavItem>
          <NavDropdown eventKey="4" title={profileMenu} id="nav-dropdown">
            <LinkContainer to="/my-achievements">
              <MenuItem>My Achievements</MenuItem>
            </LinkContainer>
            <LinkContainer to="/profile">
              <MenuItem>My Profile</MenuItem>
            </LinkContainer>
            <LinkContainer to="/account">
              <MenuItem>Account Settings</MenuItem>
            </LinkContainer>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Row>
);

export default Navigation;
