
$(document).ready(function(){
    runAll(); //I decided to make it so that it was all in a function here
              // mainly just to see.
});

function runAll(){ // This is my function that runs everything in the document ready
  $("#employeeForm").on("submit", function(event){ //this function is addapted from
    //the car array one
    event.preventDefault();

    var employeeValues = {}; //This makes objects

    $.each($("#employeeForm").serializeArray(), function(i, field){
      employeeValues[field.name] = field.value; //taken directly from scott's
      //example
    });
    $("#employeeForm").find("input[type=text]").val("");

    employeeArray.push(employeeValues);
    $(".container2").empty(); //I made a second container
    eachIndividual();//this runs each individual student
    $(".buttonDelete").on("click", runDelete);
  });
  $(".MBR").on("click", salaryBurnMonthly);// this is for the Monthly
  //burn rate thing
};

function runDelete(){ // delete function
  var checker = parseInt(this.id);//takes the id number and turns to
  // to a number and find the employeeArray
  employeeArray.splice(checker,1);//takes array index
  $(this).parent().parent().remove(); //removes containter2 it from array
  $(".body").append('<div class="container2"></div>')//reputs containter2 in


}

var employeeArray=[];//array of employees

function salaryBurnMonthly(){
  var totMonBurn = 0;
  $(".monBurnPrint").remove()
  for(var i = 0; i<employeeArray.length;i++){
    var employeeSalaryInfo = employeeArray[i];
    employeeSalaryInfoMonthly = parseInt(employeeSalaryInfo.yearlysalary)/12;
    totMonBurn += employeeSalaryInfoMonthly;

  }
  totMonBurn = Math.ceil(totMonBurn);
  $(".container2").append('<div class="monBurn"></div>');
  var $el = $(".container2").children().last();
  $el.append("<p class='monBurnPrint'> Total Monthly Burn (rounded to nearest dollar): " + totMonBurn + "</p>");
  ;

}

function eachIndividual(){
  for(var i = 0; i<employeeArray.length;i++){
    var employeeSalaryInfo = employeeArray[i];
    employeeSalaryInfoMonthly = parseInt(employeeSalaryInfo.yearlysalary)/12;
    var namefirst = employeeSalaryInfo.employeenamefirst;
    var namesecond = employeeSalaryInfo.employeelastname;
    var salarytot = employeeSalaryInfo.yearlysalary;
    $(".container2").append('<div class="monBurn"></div>');
    var $el = $(".container2").children().last();
    $el.append("<p> Employee Name, Salary, Mothly Salary: " + namefirst + " " + namesecond+", "+  salarytot+", "+employeeSalaryInfoMonthly+"<button class='buttonDelete' id="+i+ ">Delete</button"+ "</p>");

  }
}
