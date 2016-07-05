angular.module('CardsAgainstAssembly', [])
  .directive('wdiCard', wildCard);

  function wildCard(){
  var directive =  {
    restrict: 'E',
    replace: true,
    templateUrl: "templates/_cardDirective.html"
  };
  return directive
};
