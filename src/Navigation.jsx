import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { func, string, shape, number } from "prop-types";
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
import { setLanguage } from "./store/i18n";

const languages = {
  en_US: {
    locale: "en_US",
    flag: "us_flag.svg",
    flagAlt: "US flag",
    label: (
      <FormattedMessage
        id="nav.lang.english.us"
        description="English (United States) language selector in the header"
        defaultMessage="English (United States)"
      />
    )
  },
  ru_RU: {
    locale: "ru_RU",
    flag: "ru_flag.svg",
    flagAlt: "Russian flag",
    label: (
      <FormattedMessage
        id="nav.lang.russian"
        description="Russian language selector in the header"
        defaultMessage="Russian"
      />
    )
  }
};

const Navigation = props => {
  const profileMenu = props.self && (
    <span>
      {props.self.name}
      <Image
        alt={`${props.self.name}`}
        style={{ marginLeft: "0.5em" }}
        src={`/images/userpics/${props.self.userpic}`}
        width="20"
        height="20"
        circle
      />
    </span>
  );
  const dropdownFlag = (
    <img
      src={`/images/flags/${languages[props.language].flag}`}
      alt={languages[props.language].flagAlt}
      style={{ height: "1em" }}
    />
  );

  const setLang = props.setLanguage;

  return (
    <Row>
      <Navbar
        fluid
        className="navbar-narrow hidden-xs"
        inverse
        style={{ marginBottom: 0 }}
      >
        {props.self && (
          <Nav pullRight>
            <NavDropdown title={dropdownFlag} id="nav-dropdown">
              {Object.values(languages).map(language => (
                <MenuItem
                  key={language.locale}
                  onClick={() => setLang(language.locale)}
                >
                  <img
                    alt={language.flagAlt}
                    src={`/images/flags/${language.flag}`}
                    style={{ width: "1.5em", verticalAlign: "baseline" }}
                  />
                  <span style={{ marginLeft: "1em" }}>{language.label}</span>
                </MenuItem>
              ))}
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
        )}
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
            {Object.values(languages).map(language => (
              <NavItem
                key={language.locale}
                onClick={() => setLang(language.locale)}
              >
                {props.language === language.locale && (
                  <Glyphicon glyph="ok" className="pull-right" />
                )}
                <img
                  alt={language.flagAlt}
                  src={`/images/flags/${language.flag}`}
                  style={{ width: "1.5em", verticalAlign: "baseline" }}
                />
                <span style={{ marginLeft: "1em" }}>{language.label}</span>
              </NavItem>
            ))}
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
};

Navigation.propTypes = {
  language: string.isRequired,
  self: shape({
    id: number.isRequired,
    name: string.isRequired,
    userpic: string.isRequired
  }),
  setLanguage: func.isRequired
};

Navigation.defaultProps = {
  self: null
};

export default connect(
  state => ({
    language: state.i18n.language,
    self: state.self.self
  }),
  dispatch => ({
    setLanguage: language => {
      dispatch(setLanguage(language));
    }
  })
)(Navigation);
