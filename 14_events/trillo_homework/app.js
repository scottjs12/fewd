// Add New Item

// Should build the following HTML structure for a todo:
// <li class="item todo">
// 	<p>Wrap things in ca$h</p>
// 	<span class="label">Mark as Done</span>
// </li>

// Should build the following HTML structure for a done item:
// <li class="item done">
// 	<p>Learn JavaScript</p>
// 	<span class="label">Remove</span>
// </li>


var addNewItem = function(item) {
  var todoList = $("#todo-column .item-list");

  var listItem = $("<li>");
  var paragraph = $("<p>");
  var span = $("<span>");

  listItem.addClass("item");
  listItem.addClass("todo");

  paragraph.html(item);

  span.addClass("label");
  span.html("Mark As Done");

  listItem.append(paragraph);
  listItem.append(span);

  todoList.append(listItem);
};

// Move all items from "Todo" to "Done"

var completeAll = function() {
  var todoItems = $("#todo-column .item-list .item");
  var doneList = $("#done-column .item-list");

  todoItems.find(".label").html("Remove");
  todoItems.removeClass("todo");
  todoItems.addClass("done");

  doneList.append(todoItems);
};

// Remove all items from "Done"

var clearAll = function() {
  var doneList = $("#done-column .item-list");

  doneList.empty();
};

// Render Starting items

var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];

var renderAllItems = function(itemsToRender) {
  for(var i = 0; i < items.length; i++) {
    addNewItem(items[i]);
  }
};

// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item

var removeItem = function(itemNumber) {
  var doneItems = $("#done-column .item");

  var verySpecificItem = doneItems.eq(itemNumber);

  verySpecificItem.remove();
};

// Mark a single item as Done

var markAsDone = function(itemNumber) {
  var todoItems = $("#todo-column .item");

  var verySpecificItem = todoItems.eq(itemNumber);

  verySpecificItem.removeClass("todo");
  verySpecificItem.addClass("done");
  verySpecificItem.find(".label").html("Remove");

  var doneList = $("#done-column .item-list");

  doneList.append(verySpecificItem);
};



renderAllItems();