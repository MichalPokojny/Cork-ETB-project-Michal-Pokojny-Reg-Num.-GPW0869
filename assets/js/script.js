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
    let chapter = document.getElementById("marker-text");
   chapter.innerHTML = "My rating of this restaurant: 10/10";
 }

 function textTransition3() {
    let chapter = document.getElementById("locks-text");
   chapter.innerHTML = "My rating of this restaurant: 8/10";
 }

 function textTransition4() {
    let chapter = document.getElementById("saddle-text");
   chapter.innerHTML = "My rating of this restaurant: 9/10";
 }

 function textTransition5() {
    let chapter = document.getElementById("seasons-text");
   chapter.innerHTML = "My rating of this restaurant: 8/10";
 }