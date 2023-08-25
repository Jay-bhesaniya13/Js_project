let value = "";

function myFunction(ch) {
  value = value + ch;
  
  document.getElementById("demo").innerHTML = value;
}

function clr() {
  value = ""
  document.getElementById("demo").innerHTML = value;
}


function remove()
{
  value=value.slice( 0 , -1);
  document.getElementById("demo").innerHTML = value;
}

function plus() {
  if (value[value.length - 1] == "+" || value[value.length - 1] == "-" || value[value.length - 1] == "/" || value[value.length - 1] == "*") {
    value = value.slice(0, value.length - 1)
    plus();
  }
  else {
    value = value + "+";
    document.getElementById("demo").innerHTML = value;
  }

}
function minus() {
  if (value[value.length - 1] == "+" || value[value.length - 1] == "-" || value[value.length - 1] == "/" || value[value.length - 1] == "*") {
    value = value.slice(0, value.length - 1);
    minus();
  }
  else {
    value = value + "-";
    document.getElementById("demo").innerHTML = value;
  }

}

function multiplication() {
  if (value[value.length - 1] == "+" || value[value.length - 1] == "-" || value[value.length - 1] == "/" || value[value.length - 1] == "*") {
    value = value.slice(0, value.length - 1)
    multiplication();
  }
  else {
    value = value + "*";
    document.getElementById("demo").innerHTML = value;
  }
}

function division() {
  if (value[value.length - 1] == "+" || value[value.length - 1] == "-" || value[value.length - 1] == "/" || value[value.length - 1] == "*") {
    value = value.slice(0, value.length - 1)
    division();
  }
  else {
    value = value + "/";
    document.getElementById("demo").innerHTML = value;
  }
}


function total() {
  a = eval(value);
  let ans = a;
  value=a;
  if (a % 1 != 0) {
    value = a.toFixed(2);
  }

  document.getElementById("demo").innerHTML = value;
  value= value.toString();
}