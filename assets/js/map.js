//  Map functions

//  Function for message before redirect to wikipedia

function clicked () {
    alert("Great you clicked on the map, let me redirect you to wikipedia.");
}

//  Function for calculating distance from user to Dublin implementing haversine method


function getDistance() {
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          
          let userPoint = { lat: position.coords.latitude, lng: position.coords.longitude };
          let dublinPoint = { lat: 53.3498, lng: -6.2603};
          let haversine_m =  haversineDistance(userPoint, dublinPoint);
          let haversine_km = (haversine_m /1000).toFixed(0);

          document.getElementById("result").innerHTML = "Your distance from Dublin is " + haversine_km + " km.";  
      });
  } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

function squared (x) { return x * x };
function toRad (x) { return x * Math.PI / 180.0 };
function hav (x) {
  return squared(Math.sin(x / 2))
};

// hav(theta) = hav(bLat - aLat) + cos(aLat) * cos(bLat) * hav(bLon - aLon)
function haversineDistance (a, b) {
  const R = 6378137; // equatorial mean radius of Earth (in meters)
  const aLat = toRad(Array.isArray(a) ? a[1] : a.latitude || a.lat)
  const bLat = toRad(Array.isArray(b) ? b[1] : b.latitude || b.lat)
  const aLng = toRad(Array.isArray(a) ? a[0] : a.longitude || a.lng || a.lon)
  const bLng = toRad(Array.isArray(b) ? b[0] : b.longitude || b.lng || b.lon)

  const ht = hav(bLat - aLat) + Math.cos(aLat) * Math.cos(bLat) * hav(bLng - aLng)
  return 2 * R * Math.asin(Math.sqrt(ht))
};