export const ajsUserComponent = ['ajsUser', {
  template: `
    <div class="component">
      <h2>Angular JS Component</h2>
      <p>
        Hi! I am {{ $ctrl.username }}, 
        follow me on Twitter <code>{{ $ctrl.twitter }}</code> to get notfied about cool Angular stuff!
      </p>
      <button ng-click="$ctrl.select($ctrl.username)">Select</button> (check console)
    </div>
  `,
  bindings: {
    username: '<',
    twitter: '<',
    select: '&'
  },
  controller: [
    function () {}
  ]
}]