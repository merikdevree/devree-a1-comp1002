const items = document.querySelectorAll('a');
const sound = document.getElementById('launch_glow1')
const sound2 = document.getElementById('wpn_select')

items.forEach(item => {
    item.addEventListener('mouseover', function() {
        sound.volume = 0.5;
        sound.currentTime = 0;
        sound.play();
    });
    item.addEventListener('click', function() {
        
        sound2.volume = 0.5;
        sound2.currentTime = 0;
        sound2.play();
    });
});

