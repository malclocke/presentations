describe("Adder", function() {

  // Setup block, run before each `it` block
  beforeEach(function() {
    this.adder = new Adder();
  });

  it("adds two integers together", function() {
    expect(this.adder.add(2, 2)).toEqual(4);
  });

  it("shows a failed test", function() {
    expect(this.adder.add(2, 2)).toEqual(5);
  });

});
