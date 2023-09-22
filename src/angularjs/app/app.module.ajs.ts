import angular from 'angular';
import 'angular-route';

import { downgradedAngularAppModule } from '../../angular';

import { angularjsUserModule } from '../user/user.module.ajs'

import { configRoutes } from './app.routes.config.ajs';
import { ajsAppComponent } from './app.component.ajs';
import { ajsAppServiceFactory } from './app.service.ajs';

export const angularjsAppModule = 'ajs-app-module';

angular
  .module(angularjsAppModule, [
    // vendor
    'ngRoute',

    // app
    angularjsUserModule,

    // downgrade
    downgradedAngularAppModule
  ])
  // force Angular initialization so that we can use Angular injectables in Angular JS
  .run(['$location', function($location) { $location.path('/angular'); }])
  .config(configRoutes)
  .factory(...ajsAppServiceFactory)
  .component(...ajsAppComponent);
  



  
