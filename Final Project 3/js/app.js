$(document).ready (function (){
  // white spark when page loads
  event.preventDefault();

  $(document).on("mouseenter", "li#san-francisco", function (){
    $("body").toggleClass("san-francisco").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#brisbane", function (){
    $("body").show("brisbane").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#daly-city", function (){
    $("body").show("daly-city").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#san-mateo", function (){
    $("body").show("san-mateo").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#burlingame", function (){
    $("body").toggleClass("burlingame").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#south-sf", function (){
    $("body").toggleClass("south-sf").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#belmont", function (){
    $("body").toggleClass("belmont").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#san-carlos", function (){
    $("body").toggleClass("san-carlos").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#redwood-city", function (){
    $("body").toggleClass("redwood-city").fadeIn(1000);
  });
  $(document).on("mouseenter", "li#colma", function (){
    $("body").toggleClass("colma").fadeIn(1000);
  });
});

    var map;
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 37.7749, lng: -122.4194},
         zoom: 8
       });
     }
