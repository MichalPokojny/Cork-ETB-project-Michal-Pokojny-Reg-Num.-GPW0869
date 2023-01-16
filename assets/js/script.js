// Food.html image transitions functions
       
 document.getElementById("chapter-one").addEventListener("transitionend", textTransition1);
 document.getElementById("marker").addEventListener("transitionend", textTransition2);
 document.getElementById("locks").addEventListener("transitionend", textTransition3);
 document.getElementById("saddle").addEventListener("transitionend", textTransition4);
 document.getElementById("seasons").addEventListener("transitionend", textTransition5);
 
 function textTransition1() {
    let chapter = document.getElementById("chapter-text");
   chapter.innerHTML = "My rating of this restaurant: 9/10";
 }

 function textTransition2() {
    let marker = document.getElementById("marker-text");
   marker.innerHTML = "My rating of this restaurant: 10/10";
 }

 function textTransition3() {
    let locks = document.getElementById("locks-text");
    locks.innerHTML = "My rating of this restaurant: 8/10";
 }

 function textTransition4() {
    let saddle = document.getElementById("saddle-text");
    saddle.innerHTML = "My rating of this restaurant: 9/10";
 }

 function textTransition5() {
    let seasons = document.getElementById("seasons-text");
    seasons.innerHTML = "My rating of this restaurant: 8/10";
 }

// XML http request to get list of data to food.html from restaurants.txt
 
function loadXMLDoc() {
 var xhttpReq = new XMLHttpRequest();
 
 xhttpReq.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        document.getElementById("list-restaurants").innerHTML = xhttpReq.responseText;
     }
     
 };
 xhttpReq.open("GET", "restaurants.txt", true);
 xhttpReq.send();

}
// webworker API for counting time spend on webpage

const domTime = document.getElementById("dom-time");

window.addEventListener("load", () => {

const worker = new Worker("js/worker.js");
worker.postMessage("Add count timer spent on the webpage");
worker.onmessage = function(e) {
   document.getElementById("dom-time").innerHTML = e.data}
});