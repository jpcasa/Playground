
!function(){
  function foo() {
  console.log('foobar');
}

foo();
}();

// !function(_){
//   underscore.someMethod = "Yay!!";
//   console.log(_.VERSION);
// }(_);

var module = (function(){
  var exports = {};
  exports.helloMars = function() {
    console.log('Hello Mars!');
  };
  return exports;
}());
