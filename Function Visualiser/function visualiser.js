var up = 0;
var down = 0;

var index = 0;

var length = 800;

var ref = [200,10,30 ,50,70,90,110,130,150,170,190,210,230,250,270,290,310,330,350,370,390];

var pi = Math.PI;

var variables = [0,pi/21,pi/20,pi/19,pi/18,pi/17,pi/16,pi/15,pi/14,pi/13,pi/12,pi/11,pi/10,pi/9,pi/8,pi/7,pi/6,pi/5,pi/4,pi/3,pi/2];

var speed = 160;

var step = pi / speed;

var factor = 198;

function begin() {
    setInterval(update, 30);
}


function draw(a) {
    getCanvas().fillStyle = 'red';
    getCanvas().clearRect(ref[a], 0, 10, 400);
    getCanvas().fillRect(ref[a], ref[0], 10, up);
    getCanvas().fillRect(ref[a], ref[0], 10, down);
}

function update() {
    speed = document.getElementById("speed").value;
    step = pi / speed;
    for (var z = 1; z < variables.length; z++) {
        set(z);
        draw(z);
    }
}

function indexUp(y) {
    variables[y] = variables[y] + step;
    var a = Math.sin(variables[y]);
    up = (a * factor);
    down = ((a * -1) * factor);
}

function indexDown(y) {
    variables[y] = variables[y] - step;
    var a = Math.sin(variables[y]);
    up = (a * factor);
    down = ((a * -1) * factor);
}

function set(u) {
    if (variables[u] < pi) {
        indexUp(u);
    } else {
        if (variables[u] <= 0) {
            indexDown(u);
        } else {
            indexUp(u);
        }
    }
}

function getCanvas() {
    return document.getElementById("canvas").getContext("2d");
}