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
import { FormattedMessage } from "react-intl";

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
        <NavDropdown title={usDropdownFlag} id="nav-dropdown">
          <MenuItem>
            <img
              alt="US flag"
              src="/images/flags/us_flag.svg"
              style={{ width: "1.5em", verticalAlign: "baseline" }}
            />
            <span style={{ marginLeft: "1em" }}>
              <FormattedMessage
                id="nav.lang.english.us"
                description="English (United States) language selector in the header"
                defaultMessage="English (United States)"
              />
            </span>
          </MenuItem>
          <MenuItem>
            <img
              alt="Russian flag"
              src="/images/flags/ru_flag.svg"
              style={{ width: "1.5em", verticalAlign: "baseline" }}
            />
            <span style={{ marginLeft: "1em" }}>
              <FormattedMessage
                id="nav.lang.russian"
                description="Russian language selector in the header"
                defaultMessage="Russian"
              />
            </span>
          </MenuItem>
        </NavDropdown>
        <NavItem>
          <Glyphicon glyph="user" />
          <Glyphicon glyph="plus" /> <Badge bsStyle="success">2</Badge>
        </NavItem>
        <NavItem>
          <Glyphicon glyph="envelope" /> <Badge>3</Badge>
        </NavItem>
        <NavDropdown title={profileMenu} id="nav-dropdown">
          <LinkContainer to="/my-achievements">
            <MenuItem>
              <FormattedMessage
                id="nav.profile.myachievements"
                description="My Achievements profile menu item"
                defaultMessage="My Achievements"
              />
            </MenuItem>
          </LinkContainer>
          <LinkContainer to="/profile">
            <MenuItem>
              <FormattedMessage
                id="nav.profile.myprofile"
                description="My Profile profile menu item"
                defaultMessage="My Profile"
              />
            </MenuItem>
          </LinkContainer>
          <LinkContainer to="/account">
            <MenuItem>
              <FormattedMessage
                id="nav.profile.accountsettings"
                description="Account Settings profile menu item"
                defaultMessage="Account Settings"
              />
            </MenuItem>
          </LinkContainer>
          <MenuItem divider />
          <MenuItem>
            <FormattedMessage
              id="nav.profile.signout"
              description="Sign Out profile menu item"
              defaultMessage="Sign Out"
            />
          </MenuItem>
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
          <Link to="/">
            <FormattedMessage
              id="nav.brandname"
              description="Shareholder game brand message in the top-right corner"
              defaultMessage="Shareholder"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/new-game">
            <NavItem>
              <FormattedMessage
                id="nav.newgame"
                description="New Game menu item"
                defaultMessage="New Game"
              />
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/my-games">
            <NavItem>
              <FormattedMessage
                id="nav.mygames"
                description="My Games menu item"
                defaultMessage="My Games"
              />
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/players">
            <NavItem>
              <FormattedMessage
                id="nav.players"
                description="Players menu item"
                defaultMessage="Players"
              />
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/archive">
            <NavItem>
              <FormattedMessage
                id="nav.archive"
                description="Game Archive menu item"
                defaultMessage="Game Archive"
              />
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/rules">
            <NavItem>
              <FormattedMessage
                id="nav.rules"
                description="Rules menu item"
                defaultMessage="Rules"
              />
            </NavItem>
          </LinkContainer>
          <NavItem href="http://forum.stockholdergame.com/" target="_blank">
            <FormattedMessage
              id="nav.forum"
              description="Forum menu item"
              defaultMessage="Forum"
            />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Nav pullRight className="visible-xs">
          <NavItem>
            <Glyphicon glyph="ok" className="pull-right" />
            <img
              alt="US flag"
              src="/images/flags/us_flag.svg"
              style={{ width: "1.5em", verticalAlign: "baseline" }}
            />
            <span style={{ marginLeft: "1em" }}>
              <FormattedMessage
                id="nav.lang.english.us"
                description="English (United States) language selector in the header"
                defaultMessage="English (United States)"
              />
            </span>
          </NavItem>
          <NavItem>
            <img
              alt="Russian flag"
              src="/images/flags/ru_flag.svg"
              style={{ width: "1.5em", verticalAlign: "baseline" }}
            />
            <span style={{ marginLeft: "1em" }}>
              <FormattedMessage
                id="nav.lang.russian"
                description="Russian language selector in the header"
                defaultMessage="Russian"
              />
            </span>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Nav pullRight className="visible-xs">
          <NavItem>
            <Badge pullRight>2</Badge>
            <FormattedMessage
              id="nav.burger.invitations"
              description="Invitations menu label inside hamburger menu"
              defaultMessage="Invitations"
            />{" "}
            <Glyphicon glyph="user" />
            <Glyphicon glyph="plus" />
          </NavItem>
          <NavItem>
            <Badge pullRight>3</Badge>
            <FormattedMessage
              id="nav.burger.messages"
              description="Messages menu label inside hamburger menu"
              defaultMessage="Messages"
            />{" "}
            <Glyphicon glyph="envelope" />
          </NavItem>
          <NavDropdown title={profileMenu} id="nav-dropdown">
            <LinkContainer to="/my-achievements">
              <MenuItem>
                <FormattedMessage
                  id="nav.profile.myachievements"
                  description="My Achievements profile menu item"
                  defaultMessage="My Achievements"
                />
              </MenuItem>
            </LinkContainer>
            <LinkContainer to="/profile">
              <MenuItem>
                <FormattedMessage
                  id="nav.profile.myprofile"
                  description="My Profile profile menu item"
                  defaultMessage="My Profile"
                />
              </MenuItem>
            </LinkContainer>
            <LinkContainer to="/account">
              <MenuItem>
                <FormattedMessage
                  id="nav.profile.accountsettings"
                  description="Account Settings profile menu item"
                  defaultMessage="Account Settings"
                />
              </MenuItem>
            </LinkContainer>
            <MenuItem divider />
            <MenuItem>
              <FormattedMessage
                id="nav.profile.signout"
                description="Sign Out profile menu item"
                defaultMessage="Sign Out"
              />
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Row>
);

export default Navigation;
