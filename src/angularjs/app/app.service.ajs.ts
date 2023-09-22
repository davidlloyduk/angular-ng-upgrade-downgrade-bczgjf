export const ajsAppServiceFactory = [
  'AjsAppService',
  [
    '$rootScope', 
    function ($rootScope) {
      return new AjsAppService($rootScope);
    }
  ]
]

export class AjsAppService {
  constructor(private $rootScope) {}

  detectChanges() {
    this.$rootScope.$digest();
  }
}
