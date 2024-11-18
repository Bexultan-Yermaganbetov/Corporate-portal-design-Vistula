const studentID = 64803;
document.getElementById('studentID').textContent = studentID;

const idMod80 = studentID % 80;
const idMod80Base10 = idMod80;
const idMod80Base3 = idMod80.toString(3);

const idMod3Plus1 = (studentID % 3) + 1;
const angleInRadians = (Math.PI / 2) * idMod3Plus1;
const angleInDegrees = (angleInRadians * (180 / Math.PI)).toFixed(2);


document.getElementById('idMod80').textContent = `${idMod80Base10} |10 = ${idMod80Base3} |3`;
document.getElementById('idMod3Plus1').textContent = `${idMod3Plus1} (Angle = ${angleInDegrees}°)`;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawVistulaRawShield() {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 100);
    ctx.lineTo(100, 100);
    ctx.lineTo(100, 150);
    ctx.lineTo(50, 150);
    ctx.closePath();
    ctx.stroke();
}

function drawVistulaShield() {
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angleInRadians);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.lineTo(300, 100);
    ctx.lineTo(300, 150);
    ctx.lineTo(250, 150);
    ctx.lineTo(250, 200);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
}

drawVistulaRawShield();
drawVistulaShield();