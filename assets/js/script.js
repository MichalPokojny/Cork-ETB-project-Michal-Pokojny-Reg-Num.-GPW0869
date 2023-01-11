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

//  Map function

function clicked () {
    alert("Great you clicked on the map, let me redirect you to wikipedia.");
}

function getDistance() {
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          let lat1 = position.coords.latitude;
          let lon1 = position.coords.longitude;
          let lat2 = 53.3498; // Dublin lat
          let lon2 = 6.2603; // Dubkin lon
          calcCrow(lat1, lon1, lat2, lon2);
      });
  } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

function calcCrow(lat1, lon1, lat2, lon2) 
    {
      let R = 6371; // km
      let dLat = toRad(lat2-lat1);
      let dLon = toRad(lon2-lon1);

      let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      let d = (R * c/ 1000).toFixed(2);
      document.getElementById("result").innerHTML = "Your distance from Dublin is " + d + " km.";
    }

    // Converts numeric degrees to radians
    function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }
