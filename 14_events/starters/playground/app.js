console.log ("loaded, bro.")

$(".potato-generator").click(function() {
  var potatoList = $(".potatoes");

  var newPotato = $("<li>");
  newPotato.html("Potato");

  newPotato.appendTo(potatoList);
});


$(".disappear").click(function() {
	$(this).remove();
});


$(".alert-button").click(function() {
	var userInput = $(".alert-input").val();
	alert(userInput);
});

$(".alert-form").submit(function(event) {
	event.preventDefault();

	var userInput = $(".alert-form-input").val();
	alert(userInput);
});


$("#change-input").change(function() {
	alert("Oh noooo, you touched the golden egg! Now the big boulder will squish you.");
});


$(".pokemon").click(function() {
	var pokemon = $(this);

	var pokemonName = pokemon.html();

	console.log( pokemonName );
});

$(".capital-button").click(function() {
	var userInput = $("#capital-input").val();

	var capitalizeInput = userInput.toUpperCase();

	var userInputName = userInput.html;

	console.log( capitalizeInput );	

});



