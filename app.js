$(document).ready(function(){
    $("#employeeForm").on("submit", function(event){
      event.preventDefault();

      var employeeValues = {};

      $.each($("#employeeForm").serializeArray(), function(i, field){
        employeeValues[field.name] = field.value;
      });
      $("#employeeForm").find("input[type=text]").val("");

      employeeArray.push(employeeValues);
      $(".container2").empty();
      salaryBurnMonthly();
      eachIndividual();

    });
    //salaryBurnMonthly();
});

var employeeArray=[];


function salaryBurnMonthly(){
  var totMonBurn = 0;
  for(var i = 0; i<employeeArray.length;i++){
    var employeeSalaryInfo = employeeArray[i];
    employeeSalaryInfoMonthly = parseInt(employeeSalaryInfo.yearlysalary)/12;
    totMonBurn += employeeSalaryInfoMonthly;
  }
  totMonBurn = Math.ceil(totMonBurn);
  $(".container2").append('<div class="monBurn"></div>');
  var $el = $(".container2").children().last();
  $el.append("<p> Total Monthly Burn (rounded to nearest dollar): " + totMonBurn + "</p>");
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
    $el.append("<p> Employee Name, Salary, Mothly Salary: " + namefirst + " " + namesecond+", "+  salarytot+", "+employeeSalaryInfoMonthly+ "</p>");
  }
}
