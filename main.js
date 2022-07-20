const app = document.getElementById ('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:80
});

typewriter
 .typeString('La capital de las estrellas')
 .pauseFor(200)
 .start();