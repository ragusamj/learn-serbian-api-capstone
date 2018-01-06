"use strict"


function checkText(inputText) {
    let outputText = inputText;
    if ((!inputText) || (inputText === undefined) || (inputText == "") || (inputText == null)) {
        outputText = " ";
    }
    return (outputText);
}
//TRANSLATOR:

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

function showTranslationData(inputArray) {
    console.log(inputArray);
    let buildTheHtmlOutput = "";
    let translatedWord = "";
    $("#tr-results ul").html("");
    $.each(inputArray, function (inputArrayKey, inputArrayValue) {
        buildTheHtmlOutput += "<li>";
        //        buildTheHtmlOutput += "<a href='https://en.wiktionary.org/wiki/" + inputArrayValue + "' target='_blank'>";
        //        buildTheHtmlOutput += "<img src='website-images/Wiktionary-logo_wpstyle-en_with_transparency.png' alt='Wiktionary Logo'>";
        buildTheHtmlOutput += "</a>";
        buildTheHtmlOutput += "<a href='https://www.google.com/search?q=" + inputArrayValue + "' target='_blank'>";
        buildTheHtmlOutput += "<img src='website-images/google-logo.png' alt='Google Logo'>";
        buildTheHtmlOutput += "</a>";
        buildTheHtmlOutput += "<a href='http://images.google.com/images?gbv=2&hl=en&q=" + inputArrayValue + "' target='_blank'>";
        buildTheHtmlOutput += "<img src='website-images/pictionary-google.png' alt='Google Image Logo'>";
        buildTheHtmlOutput += "</a>";
        buildTheHtmlOutput += "<p>" + inputArrayValue + "</p>";
        buildTheHtmlOutput += "</li>";
        translatedWord = inputArrayValue;

    });
    getReadData(translatedWord);

    $("#tr-results ul").html(buildTheHtmlOutput);

}

//GOOGLE BOOKS

function getReadData(searchTerm) {

    var params = {
        key: 'AIzaSyArklnNS6LdiTscg4VVVkrTKS0KogLpG7k',

        q: searchTerm,
        filter: 'free-ebooks',

        maxResults: 21,
        orderBy: 'relevance',
        startIndex: 0
    };


    var result = $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes",
            data: params,
            dataType: "jsonp",
            type: "GET"
        })



        .done(function (result) {
            showReadData(result.items);
            console.log(result);

        })

        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });


}


function showReadData(readArray) {
    console.log(readArray);
    if (readArray === undefined) {
        alert("No results found")

    } else {


        let buildTheHtmlOutput = "";

        $.each(readArray, function (readArrayKey, readArrayValue) {

            buildTheHtmlOutput += "<li>";
            buildTheHtmlOutput += "<h3>" + checkText(readArrayValue.volumeInfo.authors) + "</h3>";
            buildTheHtmlOutput += "<p>" + checkText(readArrayValue.volumeInfo.title) + "</p>";
            buildTheHtmlOutput += "<a href='https://play.google.com/store/books/details?id=" + readArrayValue.id + "' target='_blank'>";
            buildTheHtmlOutput += "<img src='" + readArrayValue.volumeInfo.imageLinks.thumbnail + "'>";
            buildTheHtmlOutput += "</a>";
            buildTheHtmlOutput += "</li>";


        });

        $("#gb-results ul").html(buildTheHtmlOutput);
        $('#gb-results').show();
        $('.read').show();
    }
}

$('document').ready(function () {
    $('.hide-me').hide();
    $('.home').show();
    $('#gb-results').hide();
    $('#tr-results').hide();




    $('.start-translate, .menu-translate').click(function () {
        $('.hide-me').hide();
        $('.translate').show();


    });
    $('.start-read, .menu-read').click(function () {
        $('.hide-me').hide();
        $('.read').show();
    });

    $('#text-translate').submit(function (event) {
        event.preventDefault();
        let userInput = $('.translate-query').val();
        getTranslationData(userInput);
        $('#tr-results').show();

    })


    $('#text-read').submit(function (event) {
        event.preventDefault();
        let userInput = $('.read-query').val();


    })
})
