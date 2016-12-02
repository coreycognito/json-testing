//we need methods to display
// property is a method on the object
//create an empty object to hold data and functionality of our app
var app = {}

app.apiKey = "JA48zZQs";

//create a method
app.init = function(){
// .init is a method 

	app.getArt('horse');
	// creating a event listener on select element
	$('#subject').on('change', function(){

		var subject = $(this).val(); // getting the value of the #subject
		//console.log(subject);
		$('#artwork').empty(); // we want to empty the HTML here and fill with new query
		app.getArt(subject);
		
	}); //winky frowny neckbeard

};



// Making our Object
//getArt method will make the Ajax request to the API

app.getArt = function(query){
		//need to add query to our function above call here 
	$.ajax({
		url: 'https://www.rijksmuseum.nl/api/en/collection',
		method: 'GET',
		dataType:'jsonp',
		data: {
			key: app.apiKey,
			format:'jsonp',
			ps:20,
			q: query

			// query will  awlays be = 'woman'
		},
		success: function(result){
			console.log(result);
			app.displayArt(result.artObjects); //this is the argument (place holder parameter)
			//if success dipplayArt goes here
		},
		error: function(error){
			console.log('Something went wrong');
			console.log(error);
		}

	});

}

app.displayArt = function(artPiecesArray){
// forEach loop over array

	artPiecesArray.forEach(function(artPiece){
		console.log(artPiece);
		var title = $('<h2>').text(artPiece.title);
		var artist =$('<p>').addClass('artist').text(artPiece.principalOrFirstMaker);
		var image =$('<img>').attr('src', artPiece.webImage.url);
		var artPieceHtml = $('<div>').addClass('art-piece').append(title,artist,image);
		$('#artwork').append(artPieceHtml); // appedning entire div to our webpage



	});


};


$(function(){

	app.init();

	//starting the app!

});