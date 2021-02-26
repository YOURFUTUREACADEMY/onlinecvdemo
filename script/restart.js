document.querySelector("#restart").addEventListener('click', ()=>{
    // window.close;
    window.open('index.html',  '_blank')
    window.close();
});


window.location.hash = "CRAASHHHHHHHHH";

// Again because Google Chrome doesn't insert
// the first hash into the history
window.location.hash = "CRAASHHHHHHHHH"; 

window.onhashchange = function(){
    window.location.hash = "CRAASHHHHHHHHH";
}

  