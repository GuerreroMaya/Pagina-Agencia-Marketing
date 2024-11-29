const app = document.getElementById('typewriter');

const typewriter = new Typewriter (app, {
    loop: true,
    delay: 75
});

typewriter
.typeString('La Ciudad de los Palacios')
.pauseFor(200)
.start()
