var ballX1=600;
var ballY1=350;
var ballXp1=12;
var ballYp1=8;
var ball1size=10

var ballX2=350;
var ballY2=450;
var ballXp2=-5;
var ballYp2=-4;
var ball2size=80

var barX=350;
var barY=760;

var score=0;

//起動処理
function setup(){
    canvasSize(1200,800);
    lineW(3);
    loadImg(0,"image/mutsu.jpg");
    loadSound(0, "sound/se.m4a");
}
function mainloop(){
    drawImg(0,320,80);
    setAlp(30);
    fRect(240,10,800,800,"black");
    setAlp(100);
    sRect(250,50,700,760,"white");

    ballX1=ballX1+ballXp1;
    ballY1=ballY1+ballYp1;
    if(ballX1<=260||ballX1>=940)ballXp1=-ballXp1;
    if(ballY1<=70||ballY1>=800)ballYp1=-ballYp1;
    sCir(ballX1,ballY1,ball1size,"lime");

    ballX2=ballX2+ballXp2;
    ballY2=ballY2+ballYp2;
    if(ballX2<=330||ballX2>=870)ballXp2=-ballXp2;
    if(ballY2<=130||ballY2>=740)ballYp2=-ballYp2;
    sCir(ballX2,ballY2,ball2size,"silver");

    //スコア
    fText("SCORE:"+score+" ニャ",600,25,36,"yellow");

//ボール同士の当たり判定処理
//    if(Math.sqrt(((ballX1-ballX2)^2)+((ballY1-ballY2)^2))<(ball1size+ball2size))
 //       ballXp1=-ballXp1;
  //      ballYp1=-ballYp1;

    barX=tapX;
    if(barX<310)barX=310;
    if(barX>890)barX=890;
    sRect(barX-50,barY-20,100,40,"violet");

//バーとの当たり判定処理
    if(barX-60<ballX1&&ballX1<barX+60&&barY-20>ballY1&&ballY1>barY-40){
        ballYp1=-ballYp1-rnd(5);//面白くするために、バーで跳ね返ったらボールの速さを変える
        score=score+100;
        playSE(0);
    }
 
}