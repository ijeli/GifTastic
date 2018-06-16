var anime = ["Naruto", "Bleach", "One Piece", "Shingeki no Kyojin", "DragonBall Z", "Death Note", "D. Gray-man"];

makeButtons();
addImageButton();
//infoView();

function makeButtons () {
    $("#buttonViewer").empty();
    for (var i = 0; i < anime.length; i++) {
        
        var animeButtons = $("<button>");
        animeButtons.addClass("anime");
        animeButtons.attr("title", anime[i]);
        animeButtons.text(anime[i]);
        $("#buttonViewer").append(animeButtons)
        console.log(this);
    }
};

function addImageButton () {
    $("#addImage").on("click", function (event) {
        event.preventDefault();
        var image = $("#imageInput").val().trim();
        anime.push(image);
        makeButtons();
    });
};

    $("button").on("click", function() {
        console.log(this);
        var image = $(this).attr("title");
        queryURL = "http://api.giphy.com/v1/gifs/search?q=" + image + "&api_key=EGb3zX7ALbdh6YPVGGbjliinhTFgCnc2&limit=10"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(queryURL);
            console.log(response);
            var results = response.data

            for (var i = 0; i < results.length; i++) {
                var imageDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var animeImage = $("<img>");
                animeImage.attr("src", results[i].images.fixed_height.url);
                imageDiv.append(p);
                imageDiv.append(animeImage);
                $("#imageViewer").append(imageDiv);
            }
        });
    });

