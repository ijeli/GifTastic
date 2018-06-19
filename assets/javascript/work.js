var games = ["Halo Infinity", "The Last of Us Part II", "Death Stranding", "Cyberpunk 2077"];

function renderButtons () {
    $("#buttonViewer").empty();
    for (var i = 0; i < games.length; i++) {
        var button = $("<button>");
        button.addClass("game");
        button.attr("title", games[i]);
        button.text(games[i]);
        $("#buttonViewer").append(button);
    };

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

$("button").on("click", function () {
    var gifImage = $(this).attr("title");
    queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifImage + "&api_key=EGb3zX7ALbdh6YPVGGbjliinhTFgCnc2&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
    });

});

