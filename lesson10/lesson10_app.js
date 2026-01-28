// 描画関連
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// マウスカーソルの座標
let mouseCursorX = 0;
let mouseCursorY = 0;

// マウスボタンの状態
let mouseLeftButton = false;

// カラー値（0-1の範囲）
let colorR = 0.88;
let colorG = 0.22;
let colorB = 0.44;

// スライダーの設定
const sliderStartY = 280;
const sliderWidth = 400;
const sliderHeight = 35;
const sliderPadding = 180;
const sliderSpacing = 50;
const sliderHitAreaX = 30; // スライダーの横方向の判定範囲を広げる

// カラープレビューの設定
const previewX = 60;
const previewY = 100;
const previewWidth = 520;
const previewHeight = 130;

document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("mousedown", mousedownHandler, false);
document.addEventListener("mouseup", mouseupHandler, false);

function mouseMoveHandler(e) {
    const rect = canvas.getBoundingClientRect();
    mouseCursorX = e.clientX - rect.left;
    mouseCursorY = e.clientY - rect.top;

    if (mouseLeftButton) {
        updateColorFromMouse();
    }
}

function mousedownHandler(e) {
    mouseLeftButton = true;
    updateColorFromMouse();
}

function mouseupHandler(e) {
    mouseLeftButton = false;
}

function updateColorFromMouse() {
    const x = mouseCursorX;
    const y = mouseCursorY;

    // Redスライダー（判定範囲を左右に広げる）
    if (y >= sliderStartY && y <= sliderStartY + sliderHeight) {
        if (x >= sliderPadding - sliderHitAreaX && x <= sliderPadding + sliderWidth + sliderHitAreaX) {
            // 範囲内に収める
            let newValue = (x - sliderPadding) / sliderWidth;
            colorR = Math.max(0, Math.min(1, newValue));
        }
    }
    // Greenスライダー（判定範囲を左右に広げる）
    else if (y >= sliderStartY + sliderSpacing && y <= sliderStartY + sliderSpacing + sliderHeight) {
        if (x >= sliderPadding - sliderHitAreaX && x <= sliderPadding + sliderWidth + sliderHitAreaX) {
            let newValue = (x - sliderPadding) / sliderWidth;
            colorG = Math.max(0, Math.min(1, newValue));
        }
    }
    // Blueスライダー（判定範囲を左右に広げる）
    else if (y >= sliderStartY + sliderSpacing * 2 && y <= sliderStartY + sliderSpacing * 2 + sliderHeight) {
        if (x >= sliderPadding - sliderHitAreaX && x <= sliderPadding + sliderWidth + sliderHitAreaX) {
            let newValue = (x - sliderPadding) / sliderWidth;
            colorB = Math.max(0, Math.min(1, newValue));
        }
    }
}

function drawColorPreview() {
    // カラープレビュー矩形
    ctx.fillStyle = "rgb(" + Math.floor(colorR * 255) + "," + Math.floor(colorG * 255) + "," + Math.floor(colorB * 255) + ")";
    ctx.fillRect(previewX, previewY, previewWidth, previewHeight);
}

function drawSlider(y, value, label) {
    // ラベル
    ctx.font = "26px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "left";
    ctx.fillText(label + " : " + value.toFixed(2), 60, y + 25);

    // スライダーの背景（薄いグレー）
    ctx.fillStyle = "#ddd";
    ctx.fillRect(sliderPadding, y, sliderWidth, sliderHeight);

    // スライダーの値を表示（濃いグレー）
    ctx.fillStyle = "#888";
    ctx.fillRect(sliderPadding + value * sliderWidth, y, sliderWidth * (1 - value), sliderHeight);
}

function drawInstruction() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "#333";
    ctx.textAlign = "left";
    ctx.fillText("スライダーバーをマウスでドラッグして、色を変更します。", 60, 60);
}

function draw() {
    // 背景を白に
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 説明文
    drawInstruction();

    // カラープレビュー
    drawColorPreview();

    // スライダー描画
    drawSlider(sliderStartY, colorR, "R");
    drawSlider(sliderStartY + sliderSpacing, colorG, "G");
    drawSlider(sliderStartY + sliderSpacing * 2, colorB, "B");

    requestAnimationFrame(draw);
}

draw();