console . log("welcom to jQuery");
//JS vs jQuery$(selector).action()
//by ID
let htmlElement= document.getElementById("results");
htmlElement=$("#results");
console.log(htmlElement);

//by class
let htmlElement2=document.getElementsByClassName("tomate-bg");
htmlElement2=$(".tomate-bg");
console.log(htmlElement2);

//by tag name
let htmlElement3=document.getElementsByTagName("p");
htmlElement3=$("p");
console.log(htmlElement3);

//ID selector
$("#red").css("background-color","red").css("color","white");
$("#blue").css("background-color","blue").css("color","white");

//class selector
let paragraphWithBorder=$(".with-border");
paragraphWithBorder.css("border", "3px solid black");

paragraphWithBorder.on('click',function(){
    console.log("click");
    $(this).css( "background-color","gray");
});

//tag selector
$("p").css("cursor","pointer");
//s("p").hide();

//simple and common function

function register(){
    let testEntry=$("#testInput").val();//get and store the value
    $("#results").append(`<li>${testEntry}</li>`);
    console.log("register");
}

$("#btnRegister").on("click",register);
