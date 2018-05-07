# Angular PWA Starter
Angular 6 PWA (progressive web app) starter application ready to use. Test with incognito mode and press offline and refresh.

## Service Worker
This project is built with Angular's Service-Worker:
* Service-Workers only work in a production build, so to test, use 'ng build --prod' and run it on a HTTPS server. Example on firebase.
* Manifest created for app to be installable + icons
* Using SwUpdate service to show promt when app is opened and new version is available on server
* Static files are cached, meaning the app works in offline mode

## Structure
* Core module setup for global models, services etc.
* Routing module
* Guard for routes
* Using SCSS

## Ready to use with following libraries
* Bootstrap v4
* Fontawesome 4.7
* Moment.js
* Lodash 4.17

## Installation
Install node modules `npm i`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
