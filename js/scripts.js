$(document).ready(function() {
  $("#groceyList form").submit(function(event) {
    var alphaList = ["groceryItemOne", "groceryItemTwo", "groceryItemThree", "groceryItemFour", "groceryItemFive"];

    var alphaListTwo = alphaList.map(function(listItems) {
  return listItems * 2;
});

alert(alphaList);
  });
});
