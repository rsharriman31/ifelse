$(document).ready(function() {

  $("#q1 .expand").on('click', function() {
    if ($("#q1 .expand").is('clicked')) {
      $("#q1 .more").addClass("hidden");
      $("#q1 .less").removeClass("hidden");    
    } else {
      $("#q1 .more").removeClass("hidden");
      $("#q1 .less").addClass("hidden");    
    }     
  });
});
