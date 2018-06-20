
var games = ["Halo Infinity", "The Last of Us Part II", "Death Stranding", "Call of Duty: Black Ops 4"];

function doWork () {
    $("button").on("click", function() {
    var gifImage = $(this).attr("title");
    queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifImage + "&api_key=EGb3zX7ALbdh6YPVGGbjliinhTFgCnc2&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data

        for (var i = 0; i < results.length; i++) {
            var imageDiv = $("<br><div class = 'row'><div class = 'col-lg-12'><div></div></div></div>");
            var p = $("<span>").html("<h5>Rating: " + results[i].rating + "</h5>");
            var gameImage = $("<img>");
            gameImage.attr("src", results[i].images.fixed_width_still.url);
            gameImage.attr("data-state", "still");
            gameImage.attr("data-animate", results[i].images.fixed_width.url);
            gameImage.attr("data-still"  , results[i].images.fixed_width_still.url);
            gameImage.addClass("gif");
            imageDiv.append(p);
            imageDiv.prepend(gameImage);
            $("#imageViewer").prepend(imageDiv);
                
        }

    
    

    $("img").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            console.log("moving");
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "anime");
        } 
        else {
            console.log("still");
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        };
    });

    });

    });

}


function renderButtons () {
    $("#buttonViewer").empty();
    for (var i = 0; i < games.length; i++) {
        var button = $("<button>");
        button.addClass("game btn btn-outline-dark");
        button.attr("title", games[i]);
        button.text(games[i]);
        $("#buttonViewer").append(button);
    };
    doWork();

};

function addButton () {
    $("#addImage").on("click", function (event) {
        event.preventDefault(); 
        var image = $("#imageInput").val().trim();
        games.push(image);
        renderButtons();
        console.log(games);
    });

};


renderButtons(); 
addButton();




