# Angular PWA Starter
Angular 5 PWA (progressive web app) starter application wready to use with best practice structure and often used libraries.

## Server and API
This project is built with Angular's Service-Worker:
-Service-Workers only work in a production build, so to test, use 'ng build --prod' and run a server
-IMPORTANT! To be able to hit refresh when running the webserver in the dist folder (ex.: live-server), run with cmd 'live-server --entry-file=index.html'
-The application uses the worker for caching of both files/assets and api data. Therefore 'json-server' can be used to setup an simple api on 'localhost:3000'
-When running the webserver, navigation to 'http://127.0.0.1:8080/ngsw/state' will show debug state of the Service-Worker.

## Structure
* Core module setup for global models, services etc.
* Routing module
* Guard for routes
* Using SCSS

## Ready to use with following libraries
* Bootstrap v4
* NG-Bootstrap
* Fontawesome 4.7
* Moment.js
* Lodash 4.17

## Installation
Install node modules `npm i`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.