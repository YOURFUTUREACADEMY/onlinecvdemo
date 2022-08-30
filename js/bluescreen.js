var element = new Image;
var devtoolsOpen = false;
element.__defineGetter__("id", function () {
  devtoolsOpen = true; // This only executes when devtools is open.
});

//keydown betekent dat er iets moet gebeuren als er op een knop gedrukt word.
//In dit geval doorsturen naar de blue screen of death pagina.
//De event in de function(eevent) staat voor het indrukken van een knop.
//Het indrukken van een knop (behalve ArrowUp en ArrowDown) zorgt ervoor dat je naar de bluescreen wordt gestuurd.

document.addEventListener('keydown', function(event){
  if (event.code==='ControlLeft'|| event.code != 'ControlRight' || event.code === 'F12'){
    event.preventDefault();
    window.location.href = "bluescreen.html";
  }
})

//Als er op de rechtermuisknop word gedrukt gelijk naar blue screen of death pagina
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  window.location.href = "bluescreen.html";
});

window.addEventListener('devtoolschange', event => {
  console.log('Is DevTools open:', event.detail.isOpen);
  console.log('DevTools orientation:', event.detail.orientation);
});




