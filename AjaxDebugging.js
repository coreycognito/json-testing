$(function(){

    /* 1a. debugging syntax errors
     a single AJAX request can end up being several lines of code,
     so there's lots of opportunities to make syntax errors.
     Check your console for syntax error messages and see if you can
     fix it. Make a note of the line number where the error occurred
     and remember that your mistake is often on the line before. */

    $.ajax({
        url: 'http://myttc.ca/finch_station.json',
        method: 'GET',
        dataType: 'jsonp'
    }).done(function(data) {
        console.log('1a. syntax error FIXED!');
    });


    /* 1b. debugging cross-domain errors
     Run this code as is, and check out the error you get.
     Fix it by changing the dataType setting to something
     that facilitates cross-domain requests. */

    $.ajax({
        url: 'http://myttc.ca/finch_station.json',
        method: 'GET',
        dataType: 'jsonp'
    }).done(function(data) {
        console.log("1b. debugging cross-domain errors, FIXED!");
    });

    /* 2. Working with output data
     You can't print an entire JavaScript object out on to the
     page, so let's practice getting specific bits of info out
     of the returned data.*/

    $.ajax({
        url: 'http://myttc.ca/finch_station.json',
        method: 'GET',
        dataType: 'jsonp',
        /*2a. We need to give our success function a placeholder
         argument to hold the data the API passes back.
         One convention is to call this 'res'. Go ahead and write
         that inside the function parentheses. */
    }).done(function(response) {
        if (typeof response !== 'undefined'){
            console.log("2a. You named the success argument. YEAH!");
        }
        /*2b. We're not sure exactly what info this API give
         us, so console.log() out your new `res` argument
         here so we can look at the info in the console. */
        console.log(response);

        /*2c. Let's practice getting a specific piece of information.
         Look through the data object we logged and find the name property.
         See if you can get it to log out by accessing
         the name property from the data object. */
        console.log(response.stops[3].name);
    });
});