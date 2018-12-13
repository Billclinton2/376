function area() {
    var height = parseInt(document.getElementById("height").value);
    var width = parseInt(document.getElementById("width").value);

    var result = height * width;

    document.getElementById("result").innerHTML = result;
}

function cubed() {
  var number = parseInt(document.getElementById("number").value);

  var result2 = number * number * number;

  document.getElementById("result2").innerHTML = result2;

}

function Tri(){
  var base  = parseInt(document.getElementById("base").value);
  var height2 = parseInt(document.getElementById("height2").value);

  var result3 = (base * height2)/ 2;

  document.getElementById("result3").innerHTML = result3;
}
