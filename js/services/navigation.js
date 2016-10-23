
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        you.move(0,-40);
        you.start();
    }
    else if (e.keyCode == '40') {
        // down arrow
       you.move(0,40);
       you.start();
    }
    else if (e.keyCode == '37') {
       // left arrow
       you.move(-40,0);
       you.start();
      
    }
    else if (e.keyCode == '39') {
       // right arrow
       you.move(40,0);
       you.start();
    }

}

document.getElementById("reload-level").addEventListener("click", function() {
    scenario.start();
});
document.getElementById("restart-game").addEventListener("click", function() {
    currentScenario = 0;
    scenario.start();
});