// creating list of variables that will be referenced 
var create = document.getElementById("create");
var del = document.getElementById("delete");
var input = document.getElementById("input");
var container = document.getElementById("container"); //output
var card = document.getElementsByClassName("card"); //returns an arry
// console.log(card); //should be empty at first when you console log it

create.addEventListener("click", createCard);
  function createCard() {
    var output = '<div class="card"><section><p class="text">' + input.value + '</p></section><input type="button" class="delete" value="Delete"></div>';container.innerHTML += output
}