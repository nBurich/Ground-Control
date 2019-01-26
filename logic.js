var NasaKey = "wj9hvwYYtFlmCasOmxYTcSuODrRKDDfBf2AAEqD7";

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

    for (i = 0; i < response; i++) {
      +-
      
    
    var day1 = "2019-02-01"
    console.log(response.near_earth_objects[day1][0].name);
    console.log(response.near_earth_objects[day1][0].estimated_diameter.miles.estimated_diameter_max);
    console.log(response.near_earth_objects[day1][0].is_potentially_hazardous_asteroid);
    console.log(response.near_earth_objects[day1][0].close_approach_data[0].close_approach_date);
    console.log(response.near_earth_objects[day1][0].close_approach_data[0].miss_distance.miles);
    
    var name = response.near_earth_objects[day1][0].name;
var miles = response.near_earth_objects[day1][0].estimated_diameter.miles.estimated_diameter_max;
var hazardous = response.near_earth_objects[day1][0].is_potentially_hazardous_asteroid;
var close = response.near_earth_objects[day1][0].close_approach_data[0].close_approach_date;
var missed = response.near_earth_objects[day1][0].close_approach_data[0].miss_distance.miles;


$("#all-display").append(
   ' <tr><td>' + name +
   ' </td><td>' + miles +
   ' </td><td>' + hazardous +
   ' </td><td>' + close +
   ' </td><td>' + missed + ' </td></tr>');
}})