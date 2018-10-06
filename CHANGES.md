# Versions

## 0.2.0
###### *Unreleased*

## 0.1.1
###### *October 6th 2018*

### Chore

- [package.json] Update dependencies
- [Dockerfile] Update node version to 10
- [.gitlab-ci.yml] CI/CD script

## 0.1.0
###### *October 1st 2018*

### Features

#### Components/Containers

- [ListItem1] Implement *ListItem1* component
- [AppBar] Implement *AppBar* component
- [Sidebar] Implement *Sidebar* component
- [Layout] Implement *Layout* component
- [NoWhere] Implement *NoWhere* component
- [Home] Implement *Home* component

#### Redux

##### Reducer

- [sidebar] Implement UI reducer for sidebar

##### Enhancer

- [DevTools] Include redux DevTools enhancer

#### Utils

- [registerServiceWorker] Implement service worker for progressive Web App

#### Test-Utils

- [createShallow] Implement createShallow dealing diving through *withWidth()*

#### Constants

- [routes] Define routes
- [theme] Define Material-Ui theme

### Chore

- [Dockerfile] Add production docker configuration with multi-stage build
- [nginx] Production docker image use nginx server
- [docker-compose.yml] Implement dev environment script
- [.travis.yml] CI/CD script
- [.eslintrc] Linting configuration file

### Doc

- [CONTRIBUTING.md] Add contributing guidelines
- [CHANGES.md] Add changelog
- [README.md] Add readme with badges
