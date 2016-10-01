$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-nicknguyenweb/master/nick.json", function(data){
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
    $.each(data.qualities, function(key, value){
      $("#qualities").append("<li>" + value.quality + "</li>");
    });
  });
});
