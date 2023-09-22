import { Input, Output, EventEmitter, Directive, ElementRef, Injector, NgModule } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

import { ajsUserComponent } from './user/user.component.ajs';
import { AjsAppService  } from './app/app.service.ajs';

// Export every item from Angular JS application which will be used in the Angular part
// The Angular part then can use it like this: import { AjsModule } from '../../angularjs';
// This is the only place of the registration and keeps the Angular JS impl clear from Angular syntax

@Directive({selector: 'ajs-user'})
export class AjsUserComponentWrapper extends UpgradeComponent {
  @Input() username !: string;
  @Input() twitter !: string;
  @Output() select !: EventEmitter<void>;
 
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ajsUser', elementRef, injector);
  }
}

export { AjsAppService  } from './app/app.service.ajs';
export function AjsAppServiceProviderFactory(i: any) { return i.get('AjsAppService'); }
export const AjsAppServiceProvider = {
  provide: AjsAppService,
  useFactory: AjsAppServiceProviderFactory,
  deps: ['$injector']
};

@NgModule({
  declarations: [AjsUserComponentWrapper],
  providers: [AjsAppServiceProvider],
  exports: [AjsUserComponentWrapper]
})
export class AjsModule {}