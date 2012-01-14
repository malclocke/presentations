buster.spec.expose();

describe("Adder", function() {

  it("adds two integers together", function() {
    var adder = new Adder();
    expect(adder.add(2, 2)).toEqual(4);
  });

  it("shows a failed test", function() {
    var adder = new Adder();
    expect(adder.add(2, 2)).toEqual(4);
  });

});
