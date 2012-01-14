!SLIDE bullets
# Jasmine
* Written by Pivotal Labs
* BDD inspired (i.e. RSpec)
* (Comparitively) readable
* Spies, Stubs and Mocks

!SLIDE
# HTML scaffold
Similar to QUnit ...

!SLIDE code smaller
    @@@ Javascript
    describe("Adder", function() {

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

!SLIDE
<iframe src="/file/jasmine/jasmine.html" width="100%" height="100%"></iframe>

!SLIDE
# Matchers
    @@@ Javascript
    // Equivalent to assertions in
    // xUnit style frameworks
    expect(value).toBeTruthy();
    expect(value).toBeFalsy();
    expect(value).toMatch(/regex/);
    expect(array).toContain(value);
    // + many others available

!SLIDE
# Matchers
    @@@ Javascript
    // Roll your own matchers
    beforeEach(function() {
      this.addMatchers({
        toBeBig: function() {
          return this.actual > 1000;
        }
      })
    });
    
    expect(1001).toBeBig();

!SLIDE bullets
# `jasmine.Spy`
* Test doubles
* Fake out dependent code
* Only test the SUT

!SLIDE
# Code rarely isolated in real life
    @@@ Javascript
    function BlogPost() { ... }

    // Comment objects have dependency
    // on a BlogPost object.
    function Comment() { ... }

!SLIDE smaller
    @@@ Javascript
    Comment.prototype.commentPosted = function() {
      alert(
        // Needs a post object to work.
        "Your comment on " + this.post.getTitle() +
        " was posted successfully"
      );
    }

!SLIDE smaller
    @@@ Javascript
    beforeEach(function() {

      this.comment = new Comment();

      // Create a fake post object on the comment
      this.comment.post = jasmine.createSpy("post");

      // Create a fake getTitle() method, which will
      // always return "Dummy title"
      spyOn(this.comment.post, "getTitle")
          .andReturn("Dummy title");

    });

!SLIDE smaller
# Ensure dependent code gets called
    @@@ Javascript
    // Logger object logs all user actions
    window.logger = jasmine.createSpy("logger");
    spyOn(window.logger, "log");

    this.comment.post();

    // Check the fake logger was called correctly
    expect(window.logger.log)
      .toHaveBeenCalledWith("Comment posted");

!SLIDE bullets
# Other highlights
* No dependencies
* Nested `describe` blocks, good for small exceptions to complicated
  `beforeEach` blocks.
