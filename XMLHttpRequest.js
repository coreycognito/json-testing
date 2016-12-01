var myRequest = new XMLHttpRequest();

//console.log (myRequest);

myRequest.onload = function(){

	if (myRequest.status === 200){
		var responseObject = JSON.parse(myRequest.responseText);
		console.log(responseObject);
	}
}

// Prepare request and supply type of request, URL forom which to get the data

myRequest.open('GET','https://api.myjson.com/bins/1sdll', true);

myRequest.send();