//i dont know why this is not working
var navButton = document.getElementsByClassName("hl-button"),
    hover =document.getElementById("launch_glow1"),
    click = document.getElementById("wpn_select"),
    audios = document.querySelectorAll('audio');
console.log(audios);
navButton.addEventListener("mouseover", function(){
    hover.play();
});

navButton.addEventListener("click", function(){
    click.play();
});