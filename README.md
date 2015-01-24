# angular-treasure-focus-class

Adds a class to an element on focus and removes it when focus is lost.

treasure-focus-class requires [ngAnimate](https://docs.angularjs.org/api/ngAnimate).


## Installation

* `bower install angular-treasure-focus-class`
* add `angular-treasure-focus-class/src/treasure-focus-class.js` to your html
* add `treasure-focus-class` as an angular module dependency


## Usage

```javascript
angular.module('example', ['treasure-focus-class', 'ngAnimate']);
angular.module('example').run(run);

run.$inject = ['$rootScope'];
function run ($rootScope) {
  $rootScope.foobar = 'foobar';
}
```

```html
<!-- focusin will add foobar class, focusout will remove foobar class -->
<!-- both strings and expressions are allowed -->
<div ng-app='example'>
  <input treasure-focus-class='{{foobar}}'/>
  <input treasure-focus-class='foobar'/>
</div>
```

## Example

Try the example by running:

* `npm install`
* `bower install`
* `npm run example`

Or visit the [live example](https://treasure-data.github.io/angular-treasure-focus-class/).


## Animations

[$animate](https://docs.angularjs.org/api/ngAnimate/service/$animate) is used to add and remove classes. To view the different classes that will get added read [$animate#addClass](https://docs.angularjs.org/api/ngAnimate/service/$animate#addClass) and [$animate#removeClass](https://docs.angularjs.org/api/ngAnimate/service/$animate#removeClass).


## Scripts

* `npm run example` - run example server and open browser
* `npm run build` - minify and copy to dist folder
* `npm run tdd` - run tests whenever files change
* `npm run test` - run tests
