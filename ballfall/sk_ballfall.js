//自由落下ボールシミュレ-ション
//ポーンポーンとボールがはねる姿をシミュレーションした

//初期座標設定
var X=200;
var Y=200;

//初期速度設定
var Vx=100;
var Vy=40;
var G=9.8;
var FPS=60;
var dt=0.2;

//起動時の処理
function setup() {
    canvasSize(1200, 800);
    setFPS(FPS);
    fCir(X,800-Y, 20,"white"); 
}

function ball(X_AXIS,Y_AXIS,X_VEROCITY,Y_VEROCITY,SIZE,COLOR){
    X_AXIS=X_AXIS+X_VEROCITY*dt;
    Y_VEROCITY=Y_VEROCITY-G*dt;
    Y_AXIS=Y_AXIS+Y_VEROCITY;

    if(Y_AXIS<=30){
        Y_VEROCITY=-Y_VEROCITY;
        Y_AXIS=30;     
    }
    if(X_AXIS<=10||X_AXIS>=1190){
        X_VEROCITY=-X_VEROCITY;
    }
    fCir(X_AXIS,800-Y_AXIS,SIZE,COLOR); 
}

//メインループ
function mainloop() {
    fill("blue");
    setAlp(30);
    fRect(50, 50, 1100, 700, "blue");
    setAlp(70);


    fCir(X,800-Y, 20,"white"); 
   X=X+Vx*dt;
    Vy=Vy-G*dt;
    Y=Y+Vy;
    if(Y<=30){
        Vy=-Vy;
        Y=30;     
    }
    if(X<=10||X>=1190){
        Vx=-Vx;
    }


}
