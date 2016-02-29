
$(document).ready(function(){
    runAll();
});

function runAll(){
  $("#employeeForm").on("submit", function(event){
    event.preventDefault();

    var employeeValues = {};

    $.each($("#employeeForm").serializeArray(), function(i, field){
      employeeValues[field.name] = field.value;
    });
    $("#employeeForm").find("input[type=text]").val("");

    employeeArray.push(employeeValues);
    $(".container2").empty();
    eachIndividual();
    //salaryBurnMonthly();
    $(".buttonDelete").on("click", runDelete);
  });
  $(".MBR").on("click", salaryBurnMonthly);
};
function runDelete(){
  var checker = parseInt(this.id);
  employeeArray.splice(checker,1);
  $(this).parent().parent().remove();
  $(".body").append('<div class="container2"></div>')

}

var employeeArray=[];

function removeEmployee(){
  //console.log($(this).parent())
  //$(this).parent().remove();
}

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
