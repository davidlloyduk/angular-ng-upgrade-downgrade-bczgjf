import angular from 'angular';

import { ajsUserComponent } from './user.component.ajs';

export const angularjsUserModule = 'ajs-user-module';

angular
  .module(angularjsUserModule, [])
  .component(...ajsUserComponent);
  



  