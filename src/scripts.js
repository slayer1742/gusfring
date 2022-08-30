const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
function jump (){
    if(dino.classList != 'jump'){
        dino.classList.add('jump');

        setTimeout(function(){
            dino.classList.remove('jump');
        }, 300)
    };
}

let isAlive = setInterval (function() {
    const dinoTop = window.getComputedStyle(dino).getPropertyValue('top');
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 200){
        alert('Game over');
    }
}, 10)

document.addEventListener('keydown', function(event){
    jump();
})