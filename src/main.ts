import './polyfills';
import angular from 'angular';

import { angularjsAppModule } from './angularjs/app/app.module.ajs';

angular
  .bootstrap(
    document.getElementById(angularjsAppModule), 
    [angularjsAppModule], 
    { strictDi: true }
  );

// This is a Angular JS application which also contains Angular as a downgradedModule
// Angular part is lazy by default but we have to force it's initialization if we want
// to use any Angular services in the ANgular JS part ( see app/app.module.ajs.ts )

// The support fort multiple downgradeModule in a single Angular JS app is comming soon
// which can play nicely with their lazy nature ( see https://github.com/angular/angular/pull/26217 )

// Check out index.ts in both angular and angularjs folders
// they are the only places with ngUpgrade specifix syntax

