// business logic
function gallonsToLiters(gallons){
  let liters = (gallons * 3.785);
  return (`${gallons.toFixed(2)} gallon(s) is ${liters.toFixed(2)} liters`);
}

function litersToGallons(liters){
  let gallons = (liters /  3.785);
  return (liters.toFixed(2) +' liter(s) is ' + gallons.toFixed(2) + ' gallons');
}

// ui logic
$(document).ready(function() {
  $('#lToG').submit(function(e) {
    e.preventDefault();
    let liters = parseFloat($('input#liters').val());
    let gallons = litersToGallons(liters);

    $('#gallonsOutput').text(gallons);
  })

  $('#gToL').submit(function(e) {
    e.preventDefault();
    let gallons = parseFloat($('input#gallons').val());
    let liters = gallonsToLiters(gallons);

    $('#litersOutput').text(liters);
  })

})