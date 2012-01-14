!SLIDE bullets
# QUnit
* Written by John Resig & Jörn Zaefferer
* xUnit style
* Needs `jQuery`
* No spies, mocks or stub
* Tools for testing DOM manipulation

!SLIDE smaller
    @@@ HTML
    <html>
      <head>
        <link rel="stylesheet" href="qunit.css" type="text/css"/>
        <script src="jquery-1.7.1.js"></script>
        <script type="text/javascript" src="qunit.js"></script>
        <script type="text/javascript" src="../adder.js"></script>
        <script type="text/javascript" src="test.js"></script>
      </head>
      <body>
        <h1 id="qunit-header">QUnit example</h1>
        <h2 id="qunit-banner"></h2>
        <h2 id="qunit-userAgent"></h2>
        <ol id="qunit-tests">
        </ol>
      </body>
    </html>
!SLIDE smaller
    @@@ Javascript
    $(document).ready(function() {

      module("Adder", {
        // run before each test in the module.
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

!SLIDE
<iframe src="/file/qunit/qunit.html" width="100%" height="100%"></iframe>

!SLIDE
# Assertions
    @@@ Javascript
    ok(state, message)
    equal(actual, expected, message)
    notEqual(actual, expected, message) 
    deepEqual(actual, expected, message)
    notDeepEqual(actual, expected, message) 
    strictEqual(actual, expected, message)
    notStrictEqual(actual, expected, message) 
    raises(block, expected, message)

!SLIDE
# Testing DOM manipulation
* `#qunit-fixture` element
* Add markup required for testing
* Reset after each test

!SLIDE
    @@@ HTML
    <div id="qunit-fixture">
      <ul id="testlist"></ul>
    </div>

!SLIDE
# DOM manipulation victim
    @@@ Javascript
    // Append a list item to el with the
    // given content
    function addListItem(el, content) {
      el.append('<li>' + content + '</li>');
    }

!SLIDE smaller
    @@@ Javascript
    module("addListItem", {
      'setup': function() { this.list = $('#testlist') }
    });

    test("add a list item", function() {
      addListItem(this.list, "Test list item");
      equal(1, this.list.children().length,
            "has one child element");
    });
    
    test("proof fixture element is reset", function() {
      equal(0, this.list.children().length,
            "list should be empty");
    });

!SLIDE
<iframe src="/file/qunit/fixtures.html" width="100%" height="100%"></iframe>

