!SLIDE bullets
# The Javascript Testing Toolkit
* Malcolm Locke
* LCA2012
* 16 Jan 2012

!SLIDE
# Javascript?!

!SLIDE
> It's the only language that I'm aware of that people feel they don't need
> to learn before they start using it.  ~ _Douglas Crockford_

!SLIDE bullets
# JS code rarely has test coverage
* Not the developers primary language
* Code not well factored, difficult to approach

!SLIDE bullets
# JS test coverage *is* important
* Wide variety of platforms
* Aid debugging, run in the browser
* Complex JS 'applications', server side JS

!SLIDE
# Our victim

    @@@ Javascript
    function Adder() {}

    Adder.prototype.add = function(a, b) {
      return a + b;
    }

    // Usage
    var adder = new Adder();
    adder.add(2, 2); // -> 4
