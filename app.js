"use strict"

//define objects, functions and variables.
//TRANSLATOR:
//STEP 2:using the input from the user (q) make the API call to get the JSON respone. yandex
function getTranslationData(searchTerm) {
    console.log(searchTerm);
    var result = $.ajax({
            url: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171130T020127Z.45d0be296a8190a9.526acec1ed5d18797322ed46ef6078a73f832acf&text=" + searchTerm + "&lang=en-bs&format=html&callback=?",
            dataType: "json",

            type: "GET"
        })

        .done(function (result) {
            console.log(result);
            showTranslationData(result.text);
        })

        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });

}
//duplicate for google books.
function showTranslationData(inputArray) {
    console.log(inputArray);

    //create an empty variable to store one LI for each one the results
    let buildTheHtmlOutput = "";

    $.each(inputArray, function (inputArrayKey, inputArrayValue) {
        //create and populate one LI for each of the results ("+=" means concatenate to the previous one)
        buildTheHtmlOutput += "<li>";
        //        buildTheHtmlOutput += "<h3>Results</h3>";
        buildTheHtmlOutput += "<p>" + inputArrayValue + "</p>";
        //        buildTheHtmlOutput += "<img src='website-images/Wiktionary-logo_wpstyle-en_with_transparency.png' alt='Logo'>";
        buildTheHtmlOutput += "<a href='https://en.wiktionary.org/wiki/" + inputArrayValue + "'>";
        buildTheHtmlOutput += "<img src='website-images/Wiktionary-logo_wpstyle-en_with_transparency.png' alt='Wiktionary Logo'>";
        buildTheHtmlOutput += "</a>";
        buildTheHtmlOutput += "</li>";


    });

    //use the HTML output to show it in the index.html
    $("#tr-results ul").html(buildTheHtmlOutput);

}

function getReadData(searchTerm) {

    var params = {
        key: 'AIzaSyArklnNS6LdiTscg4VVVkrTKS0KogLpG7k',

        q: searchTerm,
        // filter: 'free-ebooks',
        maxResults: 20,
        orderBy: 'relevance',
        startIndex: 0
    };


    var result = $.ajax({
            /* update API end point */
            url: "https://www.googleapis.com/books/v1/volumes",
            data: params,
            dataType: "jsonp",
            /*set the call type GET / POST*/
            type: "GET"
        })


        /* if the call is successful (status 200 OK) show results */
        .done(function (result) {
            /* if the results are meeningful, we can just console.log them */
            console.log(result);

        })

        /* if the call is NOT successful show errors */
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });


}
//STEP 1: start translation//

$('document').ready(function () {
    $('.hide-me').hide();
    $('.home').show();



    $('.start-translate').click(function () {
        $('.hide-me').hide();
        $('.translate').show();
        //        $('.search-translate').fadeOut(500);
        //        $('.home').fadeOut(500, function () {
        //
        //            $('.search-translate').fadeIn(500);
        //
        //        });

    });
    $('.start-read').click(function () {
        $('.hide-me').hide();
        $('.read').show();
        //        $('.home').fadeOut(500, function () {
        //            $('.search-translate').fadeOut(500);
        //            $('.search-read').fadeIn(500);
        //        });

    });

    $('#text-translate').submit(function (event) {
        event.preventDefault();
        let userInput = $('.translate-query').val();
        getTranslationData(userInput);
    })


    $('#text-read').submit(function (event) {
        event.preventDefault();
        let userInput = $('.read-query').val();
        getReadData(userInput);
    })



})
//STEP 1a: start the book search//





//Get the input from the user (can this form target two search-boxes at ones (tr + gb)?)//









//using the defined objects, functions and variables
//show the json array received from the API call

//function displayTranslation

// if there are no results it will show an error



//STEP 3:  using the JSON response (TEXT), populate the relevant part of your HTML with the variable inside the JSON






//create an empty variable to store one LI for each one the results




//create and populate one LI for each of the results



//use the HTML output to show it in the index.html




//GOOGLE BOOKS:

//STEP 2a:using the input from the user (q) make the API call to get the JSON respone.



//show the json array received from the API call



// if there are no results it will show an error



//STEP 3a:  using the JSON response (TEXT), populate the relevant part of your HTML with the variable inside the JSON






//create an empty variable to store one LI for each one the results




//create and populate one LI for each of the results



//use the HTML output to show it in the index.html
