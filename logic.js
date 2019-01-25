var NasaKey = "Df4clu5wZ3LpKIR45I2ZIcl3wuX9P6yOUSeCDXgn";

var queryURL = "https://api.nasa.gov/planetary/apod?api_key=" + NasaKey;


$.ajax({
  url: queryURL,
  success: function (result) {
    if ("copyright" in result) {

      console.log(result);

      console.log(queryURL);

      $("#copyright").text("Image Credits: " + result.copyright);
    }
    else {
      $("#copyright").text("Image Credits: " + "Public Domain");
    }

    if (result.media_type == "video") {
      $("img").css("display", "none");
      $("video").attr("src", result.url);
    }
    else {
      $("video").css("display", "none");
      $("img").attr("src", result.url);
    }
    $("#spaceSnippet").text(result.explanation);
    $("#title").text(result.title);
    $("#date").text(result.date);

  }
});

var AsteroidsKey = "Df4clu5wZ3LpKIR45I2ZIcl3wuX9P6yOUSeCDXgn";

var roidURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-02-01&end_date=2019-02-07&api_key=" + AsteroidsKey;

$.ajax({
  url: roidURL,
  method: "GET",
})
  .then(function (response) {
    console.log(response);

  });