var H=30, W=20; // field size
var shapeArray = [
    //z모양
    [[2,2],[1,2],[1,1],[0,1]],
    [[1,1],[1,0],[0,2],[0,1]],
    //z반대모양
    [[2,1],[1,1],[1,2],[0,2]],
    [[1,2],[1,1],[0,1],[0,0]],
    //ㅁ모양
    [[1,2],[1,1],[0,2],[0,1]],
    //ㅗ모양
    [[2,0],[1,1],[1,0],[0,0]],
    [[1,1],[0,2],[0,1],[0,0]],
    [[2,2],[1,2],[1,1],[0,2]],
    [[1,2],[1,1],[1,0],[0,1]],
    //한줄에 4개(ㅡ모양)
    [[3,1],[2,1],[1,1],[0,1]],
    [[1,3],[1,2],[1,1],[1,0]],
    //ㄱ모양
    [[2,2],[2,1],[1,1],[0,1]],
    [[1,0],[0,2],[0,1],[0,0]],
    [[2,2],[1,2],[0,2],[0,1]],
    [[1,2],[1,1],[1,0],[0,2]],
    //ㄱ반대모양
    [[2,2],[2,1],[1,2],[0,2]],
    [[2,2],[2,1],[2,0],[1,0]],
    [[2,1],[1,1],[0,1],[0,2]],
    [[1,2],[0,2],[0,1],[0,0]]
];
var shapeRotateMap = [1,0,3,2,4,6,7,8,5,10,9,12,13,14,11,16,17,18,15];
var shapeColorArray = [
    "rgb(199,82,82)",
    "rgb(233,174,43)",
    "rgb(105,155,55)",
    "rgb(53,135,145)",
    "rgb(49,95,151)",
    "rgb(102,86,167)"
];
var tileColor = "rgb(9,17,26)",
    shapeColor,
    wallColor = "rgb(22,41,63)";
var shapeColorIndex, nextColorIndex;
var movingThread, movingSpeed;
var fastMode = false;
var initSpeed = 500,
    deltaSpeed = 40,
    fastSpeed = 25;
var shapeCell;
var existField;
var shapePoint;
var createPoint=[1,parseInt(W/2)-2];
var currentShape, nextShape;
var score, level, levelStack=0;
var isPaused = false;

init();

// 키 입력 처리
document.onkeydown = keyDownEventHandler;
function keyDownEventHandler(e){
    switch(e.keyCode){
        case 37: setTimeout("moveLR(-1)",0); break;
        case 39: setTimeout("moveLR(1)",0); break;
        case 32: setTimeout("rotateShape()",0); break;
        case 40: moveFast(); break;
        case 80: pause(); break;
    }
}
document.onkeyup = keyUpEventHandler;
function keyUpEventHandler(e){
    if(e.keyCode == 40) moveSlow();
}

// 초기 설정
function init(){
    drawField();
    initExistField();
    setWall();
    nextColorIndex = -1;
    movingSpeed = initSpeed;
    shapeCell=[];
    shapePoint=[1,1];
    score=0; level=1;
    chooseNextShape();
    chooseNextColor();
    createShape();
}

function gebi(y,x){
    var ret = document.getElementById(String(y)+" "+String(x));
    return ret;
}

// 필드 초기화
function initExistField(){
    existField = new Array(H);
    for(var i=0;i<H;i++)
        existField[i]=new Array(W);
    for(var i=0;i<H;i++)
        for(var j=0;j<W;j++)
            existField[i][j]=false;
}
function drawField(){
    var fieldTag = "<table id=\"gameTable\" border=0>";
    for(var i=0;i<H;i++){
        fieldTag += "<tr>";
        for(var j=0;j<W;j++)
            fieldTag += "<td id=\""+String(i)+" "+String(j)+"\"></td>";
        fieldTag += "</tr>";
    }
    document.write(fieldTag);
}
function setWall(){
    for(var i=0;i<H;i++){
        gebi(i,0).style.background = wallColor;
        gebi(i,W-1).style.background = wallColor;
        existField[i][0]=true;
        existField[i][W-1]=true;
    }
    for(var i=0;i<W;i++){
        gebi(0,i).style.background = wallColor;
        gebi(H-1,i).style.background = wallColor;
        existField[0][i]=true;
        existField[H-1][i]=true;
    }
}


