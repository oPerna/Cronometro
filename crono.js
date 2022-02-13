window.onload = function() {
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var interval;

    var appendHours = document.getElementById("hours");
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");

    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);

        tens = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";

        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }

    function startTimer() {
        tens++;

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens
        }

        if(tens > 9) {
            appendTens.innerHTML = tens;
        }

        if(tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;

            tens = 0;

            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 59) {
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;

            tens = 0;
            seconds = 0;

            appendTens.innerHTML = "0" + 0;
            appendSeconds.innerHTML = "0" + 0;
        }

        if(minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }

        if(minutes > 59) {
            console.log("hours");
            hours++;
            appendHours.innerHTML = "0" + hours;

            tens = 0;
            seconds = 0;
            minutes = 0;

            appendTens.innerHTML = "0" + 0;
            appendSeconds.innerHTML = "0" + 0;
            appendMinutes.innerHTML = "0" + 0;
        }

        if(hours > 9) {
            appendHours.innerHTML = hours;
        }
    }

    document.addEventListener("keypress", function(e){
        var press = e.which || e.keyCode || 0;

        if(press == 32){
        const btn = document.querySelector("#button-stop");

        btn.click();
        }
    });

    window.addEventListener('keydown', function(e) {
        var codigoTecla = e.which || e.keyCode || 0;
        var esc = codigoTecla == 27;
        if (esc) {
            const btn = document.querySelector("#button-reset");

            btn.click();
        }
    });
    
    window.addEventListener('keydown', function(e) {
        var codigoTecla = e.which || e.keyCode || 0;
        var enter = codigoTecla == 13;
        if (enter) {
            const btn = document.querySelector("#button-start");

            btn.click();
        }
    });

    // document.addEventListener("keydown", function(e){
    //     var press = e.code || e.key || 0;
    
    //     if(press == 'keyS') {
    //     const btn = document.query("#button-stop");
    //     btn.click();
    //     }
    // });
    
    // document.addEventListener("keydown", function(e){
    //     var press = e.code || e.key || 0;
    
    //     if(press == 'Escape') {
    //     const btn = document.querySelector("#button-reset");
    //     btn.click();
    //     }
    // }); 
}
