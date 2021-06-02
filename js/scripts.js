$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });

  // for letter.html
  $("#myLetter").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const dateInput = $("input#date").val();
    const addressInput= $("input#address").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".address").text(addressInput);

    $("#letter").show();
  });

  // for shout.html
  $("#shouting").submit(function(event) {
    event.preventDefault();
    const anythingInput = $("input#anything").val();

    $(".anything").text(anythingInput.toUpperCase() + "!!!!!");
    $("#reply").show();
  });





