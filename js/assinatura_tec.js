const canvas_tec = document.getElementById("assinatura__tec");
const reset_tec = document.getElementById("Reset_Tec");
const ctx_t = canvas_tec.getContext("2d");

let size_t = 5;
let isPressed_t = false;
let color_t = "black";
let xt = undefined;
let yt = undefined;

canvas_tec.addEventListener("mousedown", (e) =>{
    isPressed_t = true;

    xt = e.offsetX;
    yt = e.offsetY;
});

canvas_tec.addEventListener("mouseup", (e) =>{
    isPressed_t = false;

    xt = e.offsetX;
    yt = e.offsetY;
});

canvas_tec.addEventListener("mousemove", (e) =>{
    if(isPressed_t){
        
        const x2t = e.offsetX;
        const y2t = e.offsetY;

        drawCircle_tec(x2t, y2t);
        drawLine_tec(xt, yt, x2t, y2t);

        xt = x2t;
        yt = y2t;

        console.log(drawCircle_tec(x2t, y2t));
        console.log(drawLine_tec(xt, yt, x2t, y2t));
    }
});

function drawCircle_tec(xt, yt){
    ctx_t.beginPath();
    ctx_t.arc(xt, yt, size_t, 0, Math.PI * 2);
    ctx_t.fillStyle = color_t;
    ctx_t.fill()
}

function drawLine_tec(x1t,y1t,x2t,y2t){
    ctx_t.beginPath();
    ctx_t.moveTo(x1t,y2t);
    ctx_t.lineTo(x2t,y2t)
    ctx_t.strokeStyle = color_t;
    ctx_t.lineWidth = size_t * 2;
    ctx_t.stroke();
}

reset_tec.addEventListener("click", () => {
    ctx_t.clearRect(0, 0, canvas_tec.width, canvas_tec.height);
});

console.log(canvas_tec);
console.log(reset_tec);
console.log( xt);
console.log( yt);