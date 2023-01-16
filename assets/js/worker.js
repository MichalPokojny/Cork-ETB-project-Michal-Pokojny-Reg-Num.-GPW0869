// timer counting from 0

var seconds = 0;

    var timer = setInterval(upTimer, 1000);

    function upTimer() {
    
    ++seconds;
    
    var hour = Math.floor(seconds / 3600);
    
    var minute = Math.floor((seconds - hour * 3600) / 60);
    
    var updSecond = seconds - (hour * 3600 + minute * 60);
    
  postMessage('Time spent on this page: ' + hour + ' h:' + minute + '  m:' + updSecond +"  s");
}

