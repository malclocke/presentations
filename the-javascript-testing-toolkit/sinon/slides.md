!SLIDE bullets
# Sinon.JS
* Written by Christian Johansen
* Not a complete framework, utilities only
* Powerful spies, stubs and mocks
* Fake AJAX server
* Works with any JS testing framework

!SLIDE
# `sinon.spy()`
    @@@ Javascript
    // Replaces myObj.method() with a spy.
    // Behaves exactly like the original
    // method.
    var spy = sinon.spy(myObj, "method");

    // true if the spy was called once
    spy.calledOnce;
    // true if the spy was called twice
    spy.calledTwice;
    // number of calls the spy received
    spy.callCount;

!SLIDE
# `sinon.spy()`
    @@@ Javascript
    // true if the spy was called with arg
    spy.calledWith(arg);

    // true if the spy was called before
    // otherSpy
    spy.calledBefore(otherSpy);

    // + many more

!SLIDE
# `sinon.stub()`
    @@@ Javascript
    var stub = sinon.stub();

    // Return different values with
    // different args
    stub.withArgs(0).returns(1);
    stub.withArgs(1).returns(2);
    stub.withArgs(-1).throws("MyError");

    stub(0);  // -> 0
    stub(1);  // -> 2
    stub(-1); // -> throws "MyError"

!SLIDE smaller
# Fake AJAX server
    @@@ Javascript
    var server = sinon.fakeServer.create();

    // Respond with a JSON string whenever
    // GET /url/for/comments is called via
    // AJAX
    server.respondWith(
      "GET", "/url/for/comments",
      [200, {"Content-Type": "application/json"},
      '[{"id":1,"body":"First comment"}]']
    );

!SLIDE
# Fake AJAX server
    @@@ Javascript
    myApp.pollForComments();

    // Server will not respond until
    // implicitly told to.  Can be useful
    // to check for 'loading' behaviour.
    server.respond();

!SLIDE bullets
# Other Sinon.JS highlights
* Fake timers
* Integration for QUnit assertions
* Jasmine matchers available
