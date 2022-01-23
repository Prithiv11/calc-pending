var calcBody = document.createElement("section");
calcBody.setAttribute("class","calcBody")
calcBody.innerHTML = `
<div class="inputScreen"><input type="text" class="value" id="dis" readonly name="txt"></div>
<div class="buttonRow">
    <div onclick="inpt(7)" role="button" id="7" class="button">7</div>
    <div onclick="inpt(8)" role="button" id="8" class="button">8</div>
    <div onclick="inpt(9)" role="button" id="9" class="button">9</div>
    <div onclick="inpt(/)" role="button" id="/" class="button"><i class="fas fa-divide"></i></div>
</div>
<div class="buttonRow">
    <div onclick="inpt(4)" role="button" id="4" class="button">4</div>
    <div onclick="inpt(5)" role="button" id="5" class="button">5</div>
    <div onclick="inpt(6)" role="button" id="6" class="button">6</div>
    <div onclick="inpt(*)" role="button" id="X" class="button">X</div>
</div>
<div class="buttonRow">
    <div onclick="inpt(1)" role="button" id="1" class="button">1</div>
    <div onclick="inpt(2)" role="button" id="2" class="button">2</div>
    <div onclick="inpt(3)" role="button" id="3" class="button">3</div>
    <div onclick="inpt(-)" role="button" id="-" class="button"><i class="fas fa-minus"></i></div>
</div>
<div class="buttonRow">
    <div onclick="inpt(.)" role="button" id="." class="button">.</div>
    <div onclick="inpt(0)" role="button" id="0" class="button">0</div>
    <div onclick="inpt(+)" role="button" id="+" class="button"><i class="fas fa-plus"></i></div>
    <div onclick="inpt(=)" role="button" id="=" class="button"><i class="fas fa-equals"></i></div>
</div>`
document.body.appendChild(calcBody);
var display = document.getElementById("dis");

function inpt(num){
    display.nodeValue += num;
}

document.getElementById("1"). onclick="inpt(1)";
document.getElementById("2"). onclick="inpt(1)";
document.getElementById("3"). onclick="inpt(1)";
document.getElementById("4"). onclick="inpt(1)";
document.getElementById("5"). onclick="inpt(1)";
document.getElementById("6"). onclick="inpt(1)";
document.getElementById("7"). onclick="inpt(1)";
document.getElementById("8"). onclick="inpt(1)";