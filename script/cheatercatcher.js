
var element = new Image;
var devtoolsOpen = false;

element.__defineGetter__("id", function () {
    devtoolsOpen = true; // This only executes when devtools is open.
});

setInterval(function () {


       document.onkeydown = function (e) {
        if (e.keyCode == 123) {
            return false;
        }

        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            window.location.href = "bluescreen.html";
            return false;

        }

        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            window.location.href = "bluescreen.html";
            return false;
        }

        if (e.ctrlKey && e.shiftKey && e.keyCode == 'U'.charCodeAt(0)) {
            window.location.href = "bluescreen.html";
            return false;
        }

        if (e.altKey && e.keyCode == 'F'.charCodeAt(0)) {
            window.location.href = "bluescreen.html";
            return false;
        }
    }
    document.addEventListener("contextmenu", function (beveiliging) {
        beveiliging.preventDefault();
    });

    devtoolsOpen = false;
    console.log(element);
    if (devtoolsOpen == true) {
        window.location.href = "bluescreen.html";
    }
}, 1000);




