$(document).ready(function(){
    $("#catForm").on("submit", function(event){
      event.preventDefault();

      var values = {};
      // values["puppies"] = "woof";
      // values.puppies = "woof";
      // values["numPups"] = 6;

      // console.log($("#catForm").serializeArray());

      //This strips the form and creates an object with the info in it
      $.each($("#catForm").serializeArray(), function(i, field){
        values[field.name] = field.value;
      });

      //this clears out the form
      $("#catForm").find("input[type=text]").val("");

      catArray.push(values);

      totalCatAge();
    });

    totalCatAge();
});

var catArray = [];

function totalCatAge(){
  var catAge = 0;
  for(var i = 0; i < catArray.length; i++){
    var cat = catArray[i];
    catAge += parseInt(cat.catage);
  }
  //console.log(catAge);
  $(".total-cat-age").text("Here is the total age: " + catAge);
}
Status API Training Shop Blog About Pricing
