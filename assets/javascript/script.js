var anime = ["Naruto", "Bleach", "One Piece", "Shingeki no Kyojin", "DragonBall Z", "Death Note", "D. Gray-man"];


//infoView();

function makeButtons () {
    $("#buttonViewer").empty();
    for (var i = 0; i < anime.length; i++) {
        
        var animeButtons = $("<button>");
        animeButtons.addClass("anime");
        animeButtons.attr("title", anime[i]);
        animeButtons.text(anime[i]);
        $("#buttonViewer").append(animeButtons)
    }
};
//debugger
function addImageButton () {
    $("#addImage").on("click", function (event) {
        event.preventDefault();
        var image = $("#imageInput").val().trim();
        anime.push(image);
        makeButtons();
        console.log(anime);
    });
};

function thingsDo () {

$("button").on("click", function() {
    console.log(this);
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
        var imageDiv;
        var p;
        var animeImage;
        var state;


        for (var i = 0; i < results.length; i++) {
            imageDiv = $("<div>");
            p = $("<p>").text("Rating: " + results[i].rating);
            animeImage = $("<img>");
            animeImage.attr("src", results[i].images.fixed_width_still.url);
            animeImage.attr("data-state", "still");
            animeImage.attr("data-animate", results[i].images.fixed_width.url);
            animeImage.attr("data-still"  , results[i].images.fixed_width_still.url);
            animeImage.addClass("gif");
            imageDiv.append(p);
            imageDiv.append(animeImage);
            $("#imageViewer").append(imageDiv);
                
        }

            
        $("img").on("click", function() {
            state = $(this).attr("data-state");
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


makeButtons();
addImageButton();
thingsDo();
