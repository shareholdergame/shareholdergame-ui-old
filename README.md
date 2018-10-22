# Shareholder Game UI

This is a new UI interface for a Shareholder game that can be seen at http://shareholdergame.com/

# New UI Development plan

Goal: Elimination of Adobe Flash

Basic requirements

* Responsive web design
* Communication with server via REST API
* i18n
* Push notifications support

Frontend

* Page wireframes
* Mock data for pages
* Mock up Redux states
* Sign-in/up page
* Start/Home page (New design will be provided)
* New Game page (New design will be provided)
* My Games page (Minor changes)
* Achievements page (New page)
* Game Archive page (New page)
* User Profile page (New design)
* Game Play page
* Game Result popup
* Game Report page
* Gamers page
* Search User page
* Card Set popup
* Chat popup

Backend

* REST API implementation
* OAuth integration

Deployment

* UI Deployment on prod
* Server app deployment

# Project structure and tools

This project was bootstrapped using `create-react-app` tool, see [REACT-APP.md](/REACT-APP.md) file for instructions on what else can be done.

## UI styles

[Bootstrap 3.x](https://getbootstrap.com/docs/3.3/css/) and [react-bootstrap](https://react-bootstrap.github.io/) projects are used to style the components. [Bootswatch](https://bootswatch.com/) themes are compatible with Bootstrap 3 and can be an option for "non-standard Bootstrap look" in the future.

## UI Routing

React router is used to do front-end routing. In order for it to work with Bootstrap, `react-router-bootstrap` is used with [`<LinkContainer to="...">`](https://github.com/react-bootstrap/react-router-bootstrap#example) wrapper.

## Internationalization (i18n)

One of the core goals of the project is to make sure it supports multiple languages and other internationalization rules (e.g. date formats and etc.), we use [`react-intl`](https://github.com/yahoo/react-intl) module which is part of [FormatJS](https://formatjs.io/) to accomplish that.

Use [`<FormattedMessage>`](https://github.com/yahoo/react-intl/wiki/Components#formattedmessage) component to represent all displayed strings.

In case when you need to pass a string as a prop to another component, you can use [injection API](https://github.com/yahoo/react-intl/wiki/API#injection-api)'s [`formatMessage()`](https://github.com/yahoo/react-intl/wiki/API#formatmessage) function to accomplish that.

To generate a list of strings from code when you added new messages, use [`/scripts/translate.js`](/scripts/translate.js) script to generate [`/src/locales/data.json`](/src/locales/data.json) file with all english labels (which is a default), but keep in mind that it will erase all current translated values from it so you might want to back it up before doing so. This script needs to be improved to make it less crazy of the process.

### Help with translation

You can help with translation efforts for this project without being a developer, just edit [`/src/locales/data.json`](/src/locales/data.json) to improve / add translation for messages that are not translated yet.

## Code quality guidelines

[ESLint](https://eslint.org/) is used together with [airbnb JavaScript styleguide](https://github.com/airbnb/javascript) as industry de-facto standard for quality control.

[Prettier](https://github.com/jlongster/prettier) is used for automated code formatting within editors that support it.

### IDE integrations

Install corresponding plugins for you text editor to enable automated style error messages and code formatting.

[Visual Studio Code](https://code.visualstudio.com/) is one of the best editors (more like IDE) with support from a large company (Microsoft) with unusual for them open source stance. If you never trusted MS to produce open software, this time it might be worth it, go check it out.

* [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

[Atom](https://atom.io/) is another open source editor created by GitHub team.

* [ESLint plugin](https://atom.io/packages/linter-eslint)
* [Prettier plugin](https://atom.io/packages/prettier-atom)

#### Automated formatting

On a todo list is to enable [automated formatting upon commit](/REACT-APP.md#formatting-code-automatically).

# Terminology

* Game - one game between two or more players which results in one winner, games are named with a number and a letter, e.g. 1234-A where A indicates that it's one of the games withing 1234 set and same players might be playing another game 1234-B, for example.
* Set - a set of games played between two or more with change in the order of turns (commonly used as this game somewhat favors last player giving them more ability to affect final outcome). Games within the same set are distinguished by adding a letter to set number, e.g. 1234-A, 1234-B.
* Round - a sequence of turns by each player, rounds are denoted by a number and the total number of rounds equals the total number of cards dealt to each player, e.g. 10 for 4+6 format
* Turn - individual player's move in the game that consists of 3 steps
* Steps - 3 distinct steps
  * first buy/sell, before playing a card
  * playing a card to change stock prices and apply write-offs/compensations
  * last buy/sell. after playing a card

# Lincese

This project is licensed under [MIT](/LICENSE) license
