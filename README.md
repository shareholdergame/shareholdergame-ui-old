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

# Lincese

This project is licensed under [MIT](/LICENSE) license
