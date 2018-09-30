# Contributing Guidelines

## Table of Contents

- [Project Structure](#project-structure)
- [Contributing](#contributing)
    - [Requirements](#crequirements)
    - [Set-up dev environement](#set-up-dev-environement)
    - [Start developing](#start-developing)
    - [Install new dependencies](#install-new-dependencies)
    - [Release a new version](#release-a-new-version)
- [Tests](#test)
    - [Commands](#commands)
    - [Practices](#practices)
    - [Test Utilities](#test-utilities)
- [Code linting](#code-linting)
- [Files organization & file naming convention](#files-organization-file-naming-convention)
    - [Redux related files go into *src/redux*](#redux-related-files-go-into-srcredux)
    - [Components go into *src/components*](#components-go-into-srccomponents)
    - [Containers go into *src/containers*](#containers-go-into-srccontainers)
- [Component & Container separation pattern](#component-container-separation-pattern)
    - [Motivation for the pattern](#motivation-for-the-pattern)
    - [Components are concerned with how things look](#components-or-presentational-components-are-concerned-with-how-things-look)
    - [Containers are concerned with how things work](#containers-are-concerned-with-how-things-work)
- [Others](#others)
    - [Material-UI](#material-ui)
    - [Audit Application](#audit-application)
- [Conventions](#conventions)

## Project Structure

```
.
├── nginx/                 # Nginx server configuration for production
├── public/                # Static files
├── src/                   # Single page application source script
├── .dockerignore          # .dockerignore
├── .eslintrc              # Eslint configuration
├── .gitignore             # .gitignore
├── .travis.yml         # CI/CD script
├── CONTRIBUTING.md        # Contributing guidelines
├── docker-compose.yml     # Docker compose script to set dev environment
├── Dockerfile             # Docker file
├── package.json           # package.json
├── README.md              # README
└── yarn.lock              # yarn.lock
```

## Contributing

### Requirements

- docker>=17.0.0
- docker-compose>=1.17.0
- node>=9.0.0
- yarn>=1.6.0

### Set-up dev environement

#. If not yet done, clone project locally

```bash
git clone <project-url> && cd <project-folder>
```

#. If not yet done, install node dependencies

```bash
yarn install # install node dependencies locally
```

#. Start application

```bash
docker-compose up # start application in dev mode
```

You can now access application in dev mode at http://localhost

### Start developing

1. Create a new branch

Requirements

- New branch **MUST** be started from *master* (which is our dev branch)
- Feature branch **MUST** be named ``feature/[a-zA-Z0-9\-]+``
- Bug fix branch **MUST** be named ``fix/[a-zA-Z0-9\-]+``
- Branch refering to an open issue **MUST** be named ``(fix|feature)/<issue-ID>`` 

2. Develop on new branch being careful to write test for every change you proceed to

3. Push branch

```bash
git push origin -u <branch>
```

Pushing will trigger a CI pipeline (see section CI/CD)

4. Create a pull request

### Install new dependencies

```bash
yarn add <package> # install package, and update package.json & yarn.lock
```

Command above can sometime error with ``EACCES`` code, this means that *docker* wrote some files (usually cache) in your local ``node_modules`` folder. 
To solve it you can change right access of the folder by running command

```bash
sudo chown -R $USER:$USER node_modules
```

### Release a new version

1. Create a release branch ``release/x.x.x``

2. Bump to version ``x.x.x``
    - ``package.json``: change version to ``x.x.x``
    - ``CHANGES.md``: ensure release section ``x.x.x`` documentation is exhaustive and set release date

3. Commit with message ``bump version to x.x.x``

```bash
git commit -am "bump version to x.x.x"
```

3. Tag version

```bash
git tag -a x.x.x -m "Version x.x.x"
```

4. Bump to version ``increment(x.x.x)-dev``
    - ``package.json``: change version to ``increment(x.x.x)-dev``
    - ``CHANGES.md``: create empty ``increment(x.x.x)-dev`` section with unreleased status

5. Push branch and tags

```bash
git push origin -u release/x.x.x --follow-tags
```

6. Proceed to merge request ``release/x.x.x`` -> ``master``

## Tests

### Commands

Run test 

```bash
yarn test
```

Run coverage

```bash
yarn test -- --coverage
```

### Practices

**Test framework**

We use [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) test framework (directly packed into [create-react-app](https://github.com/facebookincubator/create-react-app)

We use [Enzyme Shallow rendering](http://airbnb.io/enzyme/) to test component

**Requirements**

- Tests **MUST** be written in a ```**/__tests__``` folder located in the same directory as the element tested
- Tests file for ```<filename>.js``` **MUST** be named ```<filename>.test.js```
- **SHOULD** use [Jest snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html)

**Folder structure**

```
src/
:
├── path/to/folder/
│   ├── __test__/
│   │   ├── file1.test.js
│   │   └── file2.test.js
│   ├── file1.js
│   └── file2.js
:
```

### Test Utilities

TODO: complete this section

## Code linting

**Framework**

We use ESLint (packed in [create-react-app](https://github.com/facebookincubator/create-react-app))

This project use a combination of *husky*, *lint-staged*, *prettier* to format code automatically including .js,.jsx, .json and .css (c.f [create-react-app documentation](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically). 

Some pre-commit hooks are set-up so whenever you make a commit, *prettier* will format the changed files automatically.

**Requirements**

- Code **MUST** respect linting rules defined in ```.eslintrc```

## Files organization & file naming convention

### Redux related files go into *src/redux*

We make active usage of *redux*, if not familiar with *redux* we recommend going through [*redux* documentation](https://redux.js.org/) before going through this section.

**Requirements**

- Actions **MUST** go into a into *src/redux/actions*
- Reducers **MUST** go into a into *src/redux/reducers*
- Enhancers **MUST** go into a into *src/redux/enhancers*

**Folder structure**

```
src/
:
├── redux/
│   ├── actions/               # Actions
│   ├── enhancers/             # Enhancers
│   └── reducers/              # Reducers
:
```

##### Reducers

We highly recommend you reading more about [structuring reducer](https://redux.js.org/recipes/structuringreducers/)

**Requirements**

- State structure (or state *shape*) **MUST** be defined in terms of *domain data* & *app status*, it **MUST NOT** be defined after your *UI* component tree
- Root reducer (feeded to *createStore()*) **MUST** combine together specialized reducers:
    - *data* reducers, handling the data application needs to show, use, or modify (typically information retrieved from some APIs)
    - *status* reducers, handling information related to application's behavior (such as "there is a request in progress")
    - *ui* reducer, handling how the UI is currently displayed (such as "Sidebar is open")
- Global state *shape* **MUST** reflect *src/redux/reducers/* folder structure. Keys in global state **MUST** be the same as file names *src/redux/reducers/*
- Specialized reducer files **MUST** implement a *reducer* function exported as default

**Folder structure**

```
src/
:
├── redux/
│   :
│   ├── reducers/    
│   │   ├── data/         
│   │   │   ├── domain1.js        # Reducer responsible to handle state slice related to domain 1 data
│   │   │   └── domain2.js        # Reducer responsible to handle state slice related to domain 2 data
│   │   ├── status/               
│   │   │   └── bahavior1.js      # Reducer responsible to handle state slice related to application status behavior 1 
│   │   └── ui/                  
│   │       └── element1.js       # Reducer responsible to handle state slice related to UI element 1 
:   :
```

Corresponding state *shape* would be 

```javascript
{
    data : {
        domain1: {},
        domain2: {}
    },
    status : {
        category1: {}
    },
    ui : {
        element1: {}
    }
}
```

**Example**

```javascript
// Import action of interest as constants
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/ui";

// Define initial state 
const initialState = {
    open: false
};

// Implement "reducer" function with initial state as default state
cexport default (state = initialState, { type }) => {
    switch (type) {
        case OPEN_SIDEBAR:
            return {
                ...state,
                open: true
            };

        case CLOSE_SIDEBAR:
            return {
                ...state,
                open: false
            };

        default:
            return state;
    }
};
```

##### Actions

*Actions* are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using *store.dispatch()*.

**Requirements**

- Actions **MUST** be grouped by piece of state they cover (e.g. UI actions are defined into *src/redux/actions/ui.js*)
- Each action type **MUST** be declared as a constant
- Each action **SHOULD** come with an action creator function
- Action types & creator functions **MUST** be implemented in the same file
- Actions **MUST** be serializable (if you think in passing a function into an action for handling by reducers, it means that you actually need a redux middleware)
- Actions **MUST** follow [Flux-Standard-Action] (FSA)(https://github.com/redux-utilities/flux-standard-action#actions) format
    - **MUST** be a plain JavaScript object
    - **MUST** have a ``type`` property
    - **MAY** have an ``error`` property
    - **MAY** have an ``payload`` property
    - **MAY** have an ``meta`` property
    - **MUST NOT** include property other than ``type``, ``error``, ``payload`` and ``meta``
- There **SHOULD NOT** be a 1-to-1 link between actions and reducers. Typically an action could be reduced by multiple reducers

**Folder structure**

```
src/
:
├── redux/
│   ├── actions/              # Component file goes into a folder named after the component
│   │   ├── ui.js             # Action related to UI modification
│   │   └── status.js         # Actions related to status information
:
```

**Example**

```javascript
// Declare action type as a constant
export const ADD_TODO = "ADD_TODO";
// Declare action creator
export const addTodo = (text, category) => ({
    // Respect FSA standard format (type, payload, meta properties)
    type: ADD_TODO,
    payload: {
        text
    },
    meta: {
        category
    },
});
```

##### Enhancers and middlewares

Store enhancers are higher-order function that composes a store creator to return a new, enhanced store creator.
In our case, we mainly use enhancer to add *redux* middlewares allowing to hook custom behaviors when dispatching actions.

We highly recommend you reading more about [middlewares in *redux*](https://redux.js.org/advanced/middleware)

**Requirements**

- Middlewares **MUST** go into *src/redux/enhancers/middlewares*

**Folder structure**

```
src/
:
├── enhancers/
│   ├── middlewares/         # Middlewares
│   │   ├── index.js         # Combine middlewares into one enhancer
│   │   └── router.js        # Middleware managing router
│   ├── reduxDevTools.js     # Enhancer to include ReduxDevTool
│   └── index.js             # Combine enhancers into on root enhancer
:
```

### Components go into *src/components*

**Requirements**

- All components **MUST** go into *src/components*
- Components **MUST** have a unique name

#### Module specific components go into *src/components/*

**Requirements**

- Component files **MUST** go into a into a folder named after the component in *src/components/*
- Component code **MUST** be split into as many atomic sub components as necessary
- Component **MUST** follow naming pattern *path-based-component-naming*, which consists in naming the component accordingly to its relative path from *src/components/*

Examples of those components are 
- Skeleton elements such as *AppBar*, *Sidebar*
- View pannels such as *Home*
- Layout elements such as *Layout*

**Folder structure and file naming**

```
src/
:
├── components/
│   :
│   ├── AppBar/              # Component file goes into a folder named after the component
│   │   ├── __tests__/       # Component tests folder
│   │   ├── AppBar.js        # Main component file (named as the folder)
│   │   ├── IconButton.js    # Sub component file (we do not repeat AppBar in file's name)
│   │   ├── Title.js         # Sub component file (we do not repeat AppBar in file's name)
│   │   └── Toolbar.js       # Sub component file (we do not repeat AppBar in file's name)
:   :   : 
```

**Component naming**

Main component

```javascript
# src/components/AppBar/AppBar.js

// Follow path-based-component-naming (not repeating)
const AppBar = () => (
    // Component code comes here
);
```

Sub component

```javascript
# src/components/AppBar/IconButton.js

// Follow path-based-component-naming
const AppBarIconButton = () => (
    // Component code comes here
);
```

#### Generic atomic reusable components go into *src/components/UI*

**Requirements**

- Generic UI components **MUST NOT** held business logic specific to the application (they actually could be stored on some external *npm* library)
- **MUST** follow naming pattern *path-based-component-naming*, which consists in naming the component accordingly to its relative path from *src/components/UI*

Examples of those components are: *Button*, *Input*, *Checkbox*, *Select*, *Modal*, etc…

**Folder structure and file naming**

```
src/
:
├── components/
│   :
│   ├── UI/
│   │   ├── ListItem/
│   │   │   ├── __test__/
│   │   │   ├── 1.js
│   │   │   └── 2.js
│   │   ├── Button/
│   │   │   ├── __test__/
│   │   │   └── 1.js
:   :   : 
```

### Containers go into *src/containers*

**Requirements**

- Container **MUST** go into *src/containers*
- Container **MUST** follow same relative path from *src/containers* as the component it wraps from *src/components*
- Container **MUST** have same name as the component it wraps

**Folder structure**

```
src/
:
├── containers/
│   :
│   ├── AppBar/              
│   │   ├── __tests__/      
│   │   ├── AppBar.js     
│   │   ├── IconButton.js   
│   │   └── Title.js   
:   :   : 
```

## Component & Container separation pattern

We respect a separation between presentational components & containers.

### Motivation for the pattern

- Better separation of concerns makes app understandable and better UI writing components this way.
- Better reusability. Same presentational component can be used with completely different state sources, and turn those into separate container components that can be further reused.
- Presentational components are essentially app’s “palette”. It is possible to put them on a single page and let designers tweak all their variations without touching the app’s logic. It is possible to run screenshot regression tests on that page.
- This forces to extract “layout components” such as Sidebar, AppBar, etc. and use *this.props.children* instead of duplicating the same markup and layout in several container components.

You can read more about it [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

### Components (or presentational components) are concerned with how things look

**Requirements**

- **SHOULD** implement some DOM markup and styles of their own
- **MAY** contain both presentational components and containers
- **SHOULD** allow containment via this.props.children.
- **SHOULD NOT** have their own state (when they do, it **MUST** be UI state and **MUST NOT** be data)
- **SHOULD** be written as functional components unless they need state, lifecycle hooks, or performance optimizations
- **MUST** receive data and callbacks exclusively via props.
- **MUST NOT** have dependencies with the rest of the app, such as redux actions or stores
- **MUST NOT** specify how the data is loaded or mutated (API calls **MUST NOT** be defined in a component)
- **MUST NOT** define any route

#### Implement a component

##### Set imports

**Requirements**

- **MAY** import components from UI libraries typically *Material-UI*
- **MAY** import components and containers from the rest of the application
- **SHOULD NOT** import any resources related to *Redux*, except *compose()* that is sometime convenient to connect multiple marterial-ui wrappers (*withStyles()*, *withTheme()*...)
- **SHOULD NOT** have any dependencies in the rest of the application, except components or containers
- **MUST** be organized in 3 ordered sections: 1. low-level React imports / 2. *Material-UI* imports / 3. intra-application imports

**Example**

```javascript
// Section 1: React low level imports
import React from "react"; 
import PropTypes from "prop-types";
import classNames from "classnames"; 
import { compose } from "redux";

// Section 2: Material-UI imports
import MuiAppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";

// Section 3: Components & Containers import from the application
import AppBarToolbar from "./Toolbar";
```

##### Define styles

**Requirements**

- **MUST** be a function taking theme as argument and returning an object

**Example**

```javascript
const styles = theme => ({
    appBar: {
        position: "fixed",
        top: 0,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShifted: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    }
});
```

##### Code component

**Requirements**

- **SHOULD** be a function taking a props object as an argument (except lifecycle, UI state or some optimization are required)
- **MUST** respect compenent naming convention (see below)
- **MUST** be atomic
- **MUST** be agnostic of the rest of the application, this **MUST** include every variable namings. Think it as it should be able to exist on its own 
- **MUST** be documented with PropTypes

**Example**

```javascript
const AppBar = ({ 
    classes, 
    shifted, // for agnosticity we use variable name "shifted" over "sidebarOpen"
}) => (
    <MuiAppBar
        position="absolute"
        className={classNames(
            classes.appBar,
            shifted && classes.appBarShifted
        )}
    >
        <AppBarToolbar shifted={shifted} />
    </MuiAppBar>
);

// Documentation with PropTypes
AppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    shifted: PropTypes.bool
};
```

##### Connect styles and export

**Requirements**

- **MAY** inject styles information using *withStyle()*, *withTheme()*, *withWidth()*
- There **MUST** be one unique export

**Example**

Basic: only *withStyle()*

```javascript
export default withStyles(styles)(AppBar);
```

Advanced: using *compose()* from *redux*

```javascript
export default compose(
    withTheme(),
    withStyles(styles)
)(AppBar);
```

### Containers are concerned with how things work

**Requirements**

- **MAY** contain both presentational components and containers 
- **SHOULD NOT** define DOM markup of their own (except for some wrapping divs)
- **MUST NOT** have styles
- **MAY** provide the data and behavior to presentational or other container components.
- **MAY** organise components/containers using routes
- **MAY** implement redux related elements *mapStateToProp()*, *mapDispatchToProps()*, *mergeProps()* and connect it to presentational component using *connect()*
- **MAY** implement API calls or other side effects
- **MAY** be stateful, as they tend to serve as data sources

#### Implement a container

##### Set imports

**Requirements**

- **MAY** import elements from state management libraries elements (redux, react-redux)
- **MAY** import elements from *src/redux* such as actions or selectors
- **MAY** import elements from routing library
- **MAY** import *Material-UI* utilities such as *isWidthUp()*

**Example**

```javascript
// Section 1: React/Reduxd low level imports
import React, { Component } from "react"; 
import { connect } from "react-redux";

// Section 2: internal imports
import AppbarButton from "../../components/AppBar/Button";
import LayoutSkeleton from "../../components/Layout/Skeleton";
import { openSidebar } from "../../redux/actions/ui";

import { HOME } from "../../constants/routes";
```

##### Code container

**Requirements**

- **SHOULD NOT** define DOM markup of their own (except for some wrapping divs)
- **MAY** define route
- **MAY** implement hooks on React lifecycle
- **MUST** respect 

**Example**

Lifecycle container

```javascript
class WithLifecycleHooks extends Component {
    componentDidMount() {
        // Could perform some API calls here
    }

    render() {
        // return a presentational component
    }

}
```

Routing container

```javascript
const Layout = () => (
    <Switch>
        <Route path="/" exact component={() => <Redirect to={HOME} />} />
        <Route component={LayoutSkeleton} />
    </Switch>
);
```

##### Implement *mapStateToProps(state, [ownProps])*, *mapDispatchToProps(dispatch, [ownProps])*, *mergeProps(stateProps, dispatchProps, ownProps)*

**Requirements**

- **MAY** implement *mapStateToProps(state, [ownProps])*
- **MAY** implement *mapDispatchToProps(dispatch, [ownProps])*. If it is only required to map action creators it **MUST** be an object
- **MAY** implement *mergeProps(stateProps, dispatchProps, ownProps)*
- Aggregating *props* **MUST NOT** be performed within container, *ownProps* and *mergeProps()* allow to accomplish it properly out of the component (c.f. https://github.com/reduxjs/react-redux/blob/master/docs/api.md)

**Example**

```javascript
const mapStateToProps = state => ({
    shifted: state.ui.sideBarOpen
});

const mapDispatchToProps = {
    onClick: openSidebar
};
```

##### Connect container & export

**Requirements**

- **MAY** connect redux information to a comp
- **MUST** be one unique export

**Example**

```javascript
export default connect(mapStateToProps)(AppBar);
```

## Others

### Material-UI

#### Theme

[Material UI theme](https://material-ui.com/customization/themes/) is declared in *./src/constants/theme.js*

#### CSS classes

To apply styling on specific components and not in the full app, use [Material-UI overrides](https://material-ui.com/customization/overrides/)

#### UI width

To make UI fully responsive, you can use [Material-UI breakpoints](https://material-ui.com/layout/breakpoints/)

### Audit application

- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse/) of Google in order to audit your PWA and see what's missing (icons, https, ...)
- Follow the guidelines [here](https://developers.google.com/web/fundamentals/) (Google opinionated way of building PWA)

## Conventions

### RFC keywords

1. **MUST** This word, or the terms "REQUIRED" or "SHALL", mean that the
   definition is an absolute requirement of the specification.

2. **MUST NOT** This phrase, or the phrase "SHALL NOT", mean that the
   definition is an absolute prohibition of the specification.

3. **SHOULD** This word, or the adjective "RECOMMENDED", mean that there
   may exist valid reasons in particular circumstances to ignore a
   particular item, but the full implications must be understood and
   carefully weighed before choosing a different course.

4. **SHOULD NOT** This phrase, or the phrase "NOT RECOMMENDED" mean that
   there may exist valid reasons in particular circumstances when the
   particular behavior is acceptable or even useful, but the full
   implications should be understood and the case carefully weighed
   before implementing any behavior described with this label.


5. **MAY** This word, or the adjective "OPTIONAL", mean that an item is
   truly optional.  One vendor may choose to include the item because a
   particular marketplace requires it or because the vendor feels that
   it enhances the product while another vendor may omit the same item.
   An implementation which does not include a particular option MUST be
   prepared to interoperate with another implementation which does
   include the option, though perhaps with reduced functionality. In the
   same vein an implementation which does include a particular option
   MUST be prepared to interoperate with another implementation which
   does not include the option (except, of course, for the feature the
   option provides.)