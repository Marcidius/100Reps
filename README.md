# BOSSng
Angular repo for BOSS/BESS conversion

## Environment Requirements:
##############################################################################################################
1. node v6.9.2


## To Start Local Server:
##############################################################################################################
1. If not done already, run an `npm install` in the `BOSSng` project folder.
1. `npm start`



## IDE Issues:
##############################################################################################################
1. For Typescript transpiling, make sure your IDE is pointing to the Typescript module in your node_modules 
    and not your globally installed version for it's Typescript transpiling. (Typescript v2.0.3)
2. 


## Testing Error/Resolutions:
##############################################################################################################
1. Error:  "<router-outlet> is not a known element."
    Resolution:  a.  import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
                 b.  Add this line of code "schemas: [ CUSTOM_ELEMENTS_SCHEMA ]" in your TestBed.configureTestingModule

2. Error: "Can't bind to 'routerLink' since it isn't a known property of ....
    Resolution: a. 


## ANGULAR-CLI Default Documentation:
##############################################################################################################
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
