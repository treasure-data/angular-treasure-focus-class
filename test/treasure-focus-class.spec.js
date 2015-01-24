'use strict';

describe('treasure-focus-class directive', function() {
  var tpl = function tpl (className) {
    return '<input treasure-focus-class="' + className + '"/>';
  };

  var element = angular.element;
  var $compile, scope, elm, className;

  beforeEach(function () {
    angular.mock.module('treasure-focus-class');
    angular.mock.inject(function ($rootScope, _$compile_) {
      $compile = _$compile_;
      scope = $rootScope.$new();
    });
  });

  it('should not add a class when empty', function () {
    elm = $compile(element('<input treasure-focus-class/>'))(scope);
    elm.triggerHandler('focusin');
    scope.$apply();
    assert.notOk(elm.hasClass(''));
    assert.notOk(elm.hasClass('treasure-focus-class'));
  });

  it('should add and remove string class', function () {
    className = 'class-name';
    elm = $compile(element(tpl(className)))(scope);
    elm.triggerHandler('focusin');
    assert.notOk(elm.hasClass(className));
    scope.$apply();
    assert.ok(elm.hasClass(className));

    elm.triggerHandler('focusout');
    assert.ok(elm.hasClass(className));
    scope.$apply();
    assert.notOk(elm.hasClass(className));
  });

  it('should add and remove interpolated expressions', function () {
    className = '{{className}}';
    scope.className = 'class-name';
    elm = $compile(element(tpl(className)))(scope);
    elm.triggerHandler('focusin');
    scope.$apply();
    assert.ok(elm.hasClass('class-name'));

    elm.triggerHandler('focusout');
    assert.ok(elm.hasClass('class-name'));
    scope.$apply();
    assert.notOk(elm.hasClass('class-name'));
  });

  it('should add and remove multiple classes', function () {
    className = '{{className1}} {{className2}}';
    scope.className1 = 'class-name-1';
    scope.className2 = 'class-name-2';
    elm = $compile(element(tpl(className)))(scope);
    elm.triggerHandler('focusin');
    scope.$apply();
    assert.ok(elm.hasClass('class-name-1 class-name-2'));

    elm.triggerHandler('focusout');
    assert.ok(elm.hasClass('class-name-1 class-name-2'));
    scope.$apply();
    assert.notOk(elm.hasClass('class-name-1 class-name-2'));
  });

});
