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
