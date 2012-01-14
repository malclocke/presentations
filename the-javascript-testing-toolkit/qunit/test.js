$(document).ready(function() {

  module("Adder", {
    // run before each test in the module
    setup: function() { this.adder = new Adder() }
  });

  test("Good test", function() {
    expect(1);
    equal(4, this.adder.add(2, 2));
  });

  test("Broken test", function() {
    expect(1);
    equal(6, this.adder.add(2, 2)); // Will fail
  });

});
