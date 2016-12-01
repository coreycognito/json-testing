$(function() {

    $.ajax({
        url: 'http://myttc.ca/finch_station.json',
        method: 'GET',
        dataType: 'jsonp'
    }).done(function (response) {
        console.log(response);
    });

});

$(function() {

    $.ajax({
        url: 'https://lcboapi.com/stores',
        headers: { 'Authorization': 'Token MDpjMTQzNjhiYy1iN2VhLTExZTYtYTc2Yi1lYjhjN2I4ODBlYWQ6YnpRY3haUzdRZ2FNSmI3Qjdtd2g4VG9ac00wajZhQngzcjRI' },
        //method: 'GET',
        //dataType: 'jsonp'
    }).done(function (response) {
        console.log(response);
    });

});

$(function() {

    $.ajax({
        url: 'https://lcboapi.com/products?page=2',
        headers: { 'Authorization': 'Token MDpjMTQzNjhiYy1iN2VhLTExZTYtYTc2Yi1lYjhjN2I4ODBlYWQ6YnpRY3haUzdRZ2FNSmI3Qjdtd2g4VG9ac00wajZhQngzcjRI' },
        //method: 'GET',
        //dataType: 'jsonp'
    }).done(function (response) {
        console.log(response);
    });

});