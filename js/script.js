// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    function giphyURLWithSearchTerm(searchTerm) {

        var url = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
        return url;
    }

    function appendImageToBody(srcURL) {
        // write a function that will append an <img> to the body with the
        // URL provided in the parameters
        $('.results').append('<img src=' + srcURL + '>');
       
    }

    function callGiphyAPIWithSearchTerm(searchTerm) {
        var url = giphyURLWithSearchTerm(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                //console.log(response)
                var images_url = response.data[0].images.original.url;
                console.log(images_url);
                appendImageToBody(images_url);
            },
        });
    }

    //Add a click handler beloe to call the function when the button is clicked
    $("#button").click(function() {
        var searchTerm = $('#input').val();
        clearList();
        callGiphyAPIWithSearchTerm(searchTerm);
    });
    $("#clear").click(function() {
        $(".results").empty();
    });
    $("#modal").click(function() {
      var searchTerm = $('#input').val();
       callGiphyAPIWithSearchTerm(searchTerm); 
    })
    function clearList() {
        $('.reults').empty();
     
    }
});
