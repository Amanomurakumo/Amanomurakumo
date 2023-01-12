//自由落下ボールシミュレ-ション

//初期座標設定
var X=200;
var Y=200;
var counter=0;
//起動時の処理
function setup() {
    canvasSize(1200, 800);
}

//メインループ
function mainloop() {
    counter++;
    fill("blue");
    fRect(50, 50, 1100, 700, "blue");
    fText("カウンター "+counter, 600, 400, 36, "white");
    fCir(X,Y, 10,"white");
}
