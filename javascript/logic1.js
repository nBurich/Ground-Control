var AsteroidsKey = "Df4clu5wZ3LpKIR45I2ZIcl3wuX9P6yOUSeCDXgn";

var roidURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-02-01&end_date=2019-02-07&api_key=" + AsteroidsKey;

$.ajax({
    url: roidURL,
    method: "GET",
})
    .then(function (response) {
        console.log(response);

        var day1 = "2019-02-01"
        var day2 = "2019-02-02"
        var day3 = "2019-02-04"
        var day4 = "2019-02-06"
        var day5 = "2019-02-07"
        // Day 1

        var name = response.near_earth_objects[day1][0].name;
        var miles = response.near_earth_objects[day1][0].estimated_diameter.miles.estimated_diameter_max;
        var hazardous = response.near_earth_objects[day1][0].is_potentially_hazardous_asteroid;
        var close = response.near_earth_objects[day1][0].close_approach_data[0].close_approach_date;
        var missed = response.near_earth_objects[day1][0].close_approach_data[0].miss_distance.miles;
        // Day 2

        var name2 = response.near_earth_objects[day2][0].name;
        var miles2 = response.near_earth_objects[day2][0].estimated_diameter.miles.estimated_diameter_max;
        var hazardous2 = response.near_earth_objects[day2][0].is_potentially_hazardous_asteroid;
        var close2 = response.near_earth_objects[day2][0].close_approach_data[0].close_approach_date;
        var missed2 = response.near_earth_objects[day2][0].close_approach_data[0].miss_distance.miles;
        // // // Day 3

        var name3 = response.near_earth_objects[day3][0].name;
        var miles3 = response.near_earth_objects[day3][0].estimated_diameter.miles.estimated_diameter_max;
        var hazardous3 = response.near_earth_objects[day3][0].is_potentially_hazardous_asteroid;
        var close3 = response.near_earth_objects[day3][0].close_approach_data[0].close_approach_date;
        var missed3 = response.near_earth_objects[day3][0].close_approach_data[0].miss_distance.miles;
        // // // Day 4

        var name4 = response.near_earth_objects[day4][0].name;
        var miles4 = response.near_earth_objects[day4][0].estimated_diameter.miles.estimated_diameter_max;
        var hazardous4 = response.near_earth_objects[day4][0].is_potentially_hazardous_asteroid;
        var close4 = response.near_earth_objects[day4][0].close_approach_data[0].close_approach_date;
        var missed4 = response.near_earth_objects[day4][0].close_approach_data[0].miss_distance.miles;
        // // // Day 5
        var name5 = response.near_earth_objects[day5][0].name;
        var miles5 = response.near_earth_objects[day5][0].estimated_diameter.miles.estimated_diameter_max;
        var hazardous5 = response.near_earth_objects[day5][0].is_potentially_hazardous_asteroid;
        var close5 = response.near_earth_objects[day5][0].close_approach_data[0].close_approach_date;
        var missed5 = response.near_earth_objects[day5][0].close_approach_data[0].miss_distance.miles;


        $('#roid').append(
            ' <tr><td>' + name +
            '<td><td>' + miles +
            '<td><td>' + hazardous +
            '<tdr><td>' + close +
            '<td><td>' + missed + '<td><tr>'
        );

        $('#roid').append(
            '<tr><td>' + name2 +
            '<td><td>' + miles2 +
            '<td><td>' + hazardous +
            '<td><td>' + close2 +
            '<td><td>' + missed2 + '<td><tr>'
        );

        $('#roid').append(
            ' <tr><td>' + name3 +
            '<td><td>' + miles3 +
            '<td><td>' + hazardous3 +
            '<tdr><td>' + close3 +
            '<td><td>' + missed3 + '<td><tr>'
        );

        $('#roid').append(
            ' <tr><td>' + name4 +
            '<td><td>' + miles4 +
            '<td><td>' + hazardous4 +
            '<tdr><td>' + close4 +
            '<td><td>' + missed4 + '<td><tr>'
        );
        
        $('#roid').append(
            ' <tr><td>' + name5 +
            '<td><td>' + miles5 +
            '<td><td>' + hazardous5 +
            '<tdr><td>' + close5 +
            '<td><td>' + missed5 + '<td><tr>'
        );
    });