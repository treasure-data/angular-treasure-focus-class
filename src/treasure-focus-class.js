(function () {
  // module
  angular.module('treasure-focus-class', ['ngAnimate']);

  // directive
  angular.module('treasure-focus-class').directive('treasureFocusClass', treasureFocusClass);

  treasureFocusClass.$inject = ['$interpolate', '$animate'];
  function treasureFocusClass ($interpolate, $animate) {
    return {
      restrict: 'A',
      compile: compile
    };

    function compile ($element, attr) {
      var expr = $interpolate(attr.treasureFocusClass), classList = [], className;
      return link;

      function link (scope, iElement) {
        iElement.on('focusin', focusin);
        iElement.on('focusout', focusout);

        function focusin () {
          scope.$evalAsync(addClass);
        }

        function focusout () {
          scope.$evalAsync(removeClass);
        }

        function addClass () {
          className = expr(scope);
          if (className) {
            classList.push(className);
            $animate.addClass(iElement, className);
          }
        }

        function removeClass () {
          while (classList.length) {
            $animate.removeClass(iElement, classList.pop());
          }
        }
      }
    }
  }

})();
