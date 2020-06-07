const canvas = document.getElementById("canvas")
let maxSide = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
canvas.width = maxSide * .65;
canvas.height = maxSide * .65;
size = maxSide / 3.69;

const c = canvas.getContext('2d');
var sliderD = document.getElementById("d");
var sliderN = document.getElementById("n");
var text = document.getElementById("text");

function draw() {

    let n = sliderN.value;
    let d = sliderD.value;

    text.innerHTML = "<b>N: </b>" + n + "<b>  D: </b>" + d;

    c.fillRect(0, 0, canvas.width, canvas.height);//Prints white rect backgorund

    c.translate(canvas.width / 2, canvas.height / 2);
    c.beginPath();
    c.strokeStyle = 'white'; c.lineWidth = 0.5;
    for (let theta = 0; theta <= 360; theta++) {
        let k = theta * d * Math.PI / 180;
        let r = size * Math.sin(n * k);
        let x = -r * Math.cos(k);
        let y = -r * Math.sin(k);
        c.lineTo(x, y);
        c.moveTo(x, y);
    }
    c.stroke();
    c.translate(canvas.width / -2, canvas.height / -2);

    window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw)
