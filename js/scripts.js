$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"]

    blanks.forEach(function(blank) {
      let userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});