$(document).ready(function(){
    //$("scott").on("getting home", makePB&J;
    //.on('click',...)
    //.on('dblclick',...)
    //.on('focusin',...)
    //.on('focusout',...)
    //.on('mousedown',...)
    //.on('mouseup',...)
    //.on('mousemove',...)
    //.on('mouseout',...)
    //.on('mouseover',...)
    //.on('mouseleave',...)
    //.on('mouseenter',...)


    $(".clicky").on("click", clickClicky);
    $(".meow-holder").on('click', '.meow', clickMeow);

    $(".container").on("click", ".delete", deleteClick);

    // $('.clicky').click(function(){
    //   counterz++;
    //   $(".container").append('<p>Meowz ' + counterz + '</p>');
    // });
});

var counterz = 0;

function clickMeow(){
    console.log("Meow");
}

// function clickClicky(){
//     counterz++;
//     $(".meow-holder").append('<button class="purr">Meowz</button>');
//     $(".meow-holder").append('<p class="meow">Watch me work</p>');
// }

function deleteClick(){
    //.empty -> Clears out all the children of an element
    //.remove -> Removes an element and all its children
    $(this).parent().remove();
}

function clickClicky(){
    counterz++;
    $(".container").append('<div class="person"></div>');
    var $el = $(".container").children().last();

    $el.append("<p>Some infomation: " + counterz + "</p>");
    $el.append("<button class='delete'>Delete</button>");
}
