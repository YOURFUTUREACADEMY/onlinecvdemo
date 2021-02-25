

//Als er gedrukt wordt op een van deze sneltoetsen word je gelijk doorgestuurd naar een volgende pagina.
//keydown betekent dat er iets moet gebeuren als er op een knop gedrukt word.
//In dit geval doorsturen naar de blue screen of death pagina.
//De e in de function(e) staat voor het indrukken van een knop.
document.addEventListener("keydown", function(e){
    e.preventDefault();
  //Als er gedrukt wordt op ctrl shift i word je naar de blue screen of death pagina gestuurd.
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    window.location.href = "bluescreen.html";
}
//Als er gedrukt wordt op ctrl shift j word je naar de blue screen of death pagina gestuurd.
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  window.location.href = "bluescreen.html";
}
//Als er gedrukt wordt op ctrl shift u word je naar de blue screen of death pagina gestuurd.
if(e.ctrlKey && e.shiftKey && e.keyCode == 'U'.charCodeAt(0)){
  window.location.href = "bluescreen.html";
}
//Als er gedrukt wordt op alt f word je naar de blue screen of death pagina gestuurd.
if(e.altKey && e.keyCode == 'F'.charCodeAt(0)){ 
  window.location.href = "bluescreen.html";
}
if(e.keycode == 'devtools'){
  window.location.href = "bluescreen.html";
}
});
//Als er op de rechtermuisknop word gedrukt gelijk naar blue screen of death pagina
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
   window.location.href = "bluescreen.html";
});




