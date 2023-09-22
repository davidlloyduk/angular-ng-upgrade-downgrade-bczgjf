import { UserService } from '../../angular';

export const ajsAppComponent = ['ajsApp', {
  template: `
    <div class="component">
      <h2>Hello from {{ $ctrl.name }}</h2>
      <p>
        The user {{ $ctrl.user.username }} ({{ $ctrl.user.twitter }}) was retrieved using
        a <code>UserService</code> from Angular part of the application.
      </p>
      <p>Epic!</p>
    </div>
  `,
  controller: [
    'userService',
    function (userService: UserService) {
    
      this.name = 'Angular JS';
      this.user = userService.getUser();
    }
  ]
}]