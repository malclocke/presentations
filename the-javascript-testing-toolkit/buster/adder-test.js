buster.testCase("Adder", {

  "adds two integers together": function() {
    var adder = new Adder();
    assert.equals(adder.add(2, 2), 4);
  },

  "shows a failed test": function() {
    var adder = new Adder();
    assert.equals(adder.add(2, 2), 5);
  }

});
