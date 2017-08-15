$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var listInput = ['listInput'];
    var listOutput = listInput.map(function(thing) {
      var list = ($ ('#' + thing).val());
      return list;
    });
    listOutput.sort();
    listOutput.forEach(function(stuff) {
      $("#results").append("<li>" + stuff + "</li>");
    });

  });
});
