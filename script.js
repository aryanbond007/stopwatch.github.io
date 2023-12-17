
var hr = 0;
var min = 0;
var sec = 0;
var mili = 0;

var timer = false; // denotes if stopwatch is not running or not

//function for on-click start()
function start() {
    document.getElementById("start").disabled = true;
    timer = true;
    stopwatch();
    
}
function render(){
    document.getElementById('hour').innerHTML = hr;
    document.getElementById('min').innerHTML = min;
    document.getElementById('scnds').innerHTML = sec;
    document.getElementById('msec').innerHTML = mili;

}


//function for onClick stop()
function stop() {
    timer = false;
    document.getElementById("start").disabled = false;
}

//function for onClick reset()
function reset() {
    document.getElementById("start").disabled = false;
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    mili = 0;

    render();

    // document.getElementById('hour').innerHTML = hr;
    // document.getElementById('min').innerHTML = min;
    // document.getElementById('scnds').innerHTML = sec;
    // document.getElementById('msec').innerHTML = mili;

}

//function for working of stopwatch
function stopwatch() {
    if (timer == true) {
        mili = mili + 1;

        if (mili == 100) {
            sec = sec + 1;
            mili = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        render();
        // document.getElementById('min').innerHTML = min;
        // document.getElementById('hour').innerHTML = hr;

        // document.getElementById('scnds').innerHTML = sec;
        // document.getElementById('msec').innerHTML = mili;
        setTimeout("stopwatch()", 10);  // function will call the stopwatch() every 10ms 
    }
    

}