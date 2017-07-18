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
	$("#todo-column ul").append(
		"<li class='item todo'><p>"+item+"</p><span class='label'>Mark as Done</span></li>"
	);
};

// Move all items from "Todo" to "Done"

var completeAll = function() {
	$( "#todo-column ul li" ).each(function( index ) {
		markAsDone(index);
	});
};

// Remove all items from "Done"

var clearAll = function() {
	$("#done-column ul").empty();
};

// Render Starting items

var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];

var renderAllItems = function(itemsToRender) {	
	$.each( itemsToRender, function( i, val ) {
		addNewItem(val);		
	});
};

$(document).ready(function() {
	renderAllItems(items);	
	
	$("#new-item-button").click(function() {
		addNewItem($("input#new-item-text").val());
		$("input#new-item-text").val('');
	});
	
	$(document).on('click', '#todo-column ul li.todo .label', function() {
       markAsDone($(this).parent('li').index());
	});
	
	$(document).on('click', '#done-column ul li.done .label', function() {
       removeItem($(this).parent('li').index());
	});	
});

// ----------------
// BONUS
// ----------------

// What does .eq() do?
// --> Selects the element at index n within the matched set.

// Remove a single item

var removeItem = function(itemNumber) {
	$("#done-column ul li:eq("+itemNumber+")").remove();	
};

// Mark a single item as Done

var markAsDone = function(itemNumber) {
	$("#done-column ul").append(		
		"<li class='item done'><p>"+$("#todo-column ul li:eq("+itemNumber+")").text()+"</p><span class='label'>Remove</span></li>"
	);	
	$("#todo-column ul li:eq("+itemNumber+")").remove();
};