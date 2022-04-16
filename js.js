window.onload = function() {

    // play
    document.getElementById("playButton").onclick = function() {
            document.getElementById("myVideo").play();

        }
        // stop
    document.getElementById("stopButton").onclick = function() {
            document.getElementById("myVideo").pause();

        }
        // faster speed
    document.getElementById("fast").onclick = function() {
            document.getElementById("myVideo").playbackRate = 2;

        }
        // normal speed
    document.getElementById("normalPlay").onclick = function() {
            document.getElementById("myVideo").playbackRate = 1;
        }
        // slower speed
    document.getElementById("slow").onclick = function() {
            document.getElementById("myVideo").playbackRate = 0.5;

        }
        // 10 sec forward
    document.getElementById("plusTenSeconds").onclick = function() {
            document.getElementById("myVideo").currentTime += 10;

        }
        // 10 sec previous
    document.getElementById("minusTenSeconds").onclick = function() {
        document.getElementById("myVideo").currentTime -= 10;

    }

    //
    // volume bar
    document.getElementById("volumeBar").onclick = function() {
            document.getElementById("myVideo").volume = (this.value / 100);
            document.getElementById("showVolume").innerHTML = this.value;
        }
        // mute
    document.getElementById("mute").onclick = function() {
        var mu = document.getElementById("myVideo");
        if (mu.muted == false) {
            mu.muted = true;
        } else if (mu.muted == true) {
            mu.muted = false;
        }

    }

}


// function playPause() { 
//     if (myVideo.paused) 
//       myVideo.play(); 
//     else 
//       myVideo.pause(); 
// }