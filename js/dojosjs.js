console.log("Go Chuck !");

var chuck = document.getElementById("chuck");

document.getElementById("chuck").addEventListener("mouseover", mouseOver);
document.getElementById("chuck").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("chuck").style.borderRadius = "0%";
}
 
function mouseOut() {
    document.getElementById("chuck").style.borderRadius = "50%";
}


let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");

function ouvre(){
    if(getComputedStyle(d1).display != "none"){
      d1.style.display = "none";
    } else {
      d1.style.display = "block";
    }
  };
  p1.onclick = ouvre;

function ouvre(){
    if(getComputedStyle(d2).display != "none"){
      d2.style.display = "none";
    } else {
      d2.style.display = "block";
    }
  };
  p2.onclick = ouvre;  

function ouvre(){
    if(getComputedStyle(d3).display != "none"){
      d3.style.display = "none";
    } else {
      d3.style.display = "block";
    }
  };
  p3.onclick = ouvre;   