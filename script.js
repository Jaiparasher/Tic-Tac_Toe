console.log("Welcome To Tic Tac Toe");
let music=new Audio("music.mp3");
let audioTurn= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let Turn="X";
let isgameover=false;

//Function to change turn
const changeTurn=()=>{
    return Turn==="X"?"0":"X"
}
//Function to check win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
   let wins=[
       [0,1,2,2,5,0],
       [3,4,5,2,15,0],
       [6,7,8,2,25,0],
       [0,3,6,-7.5,15,90],
       [1,4,7,2.5,15,90],
       [2,5,8,12.5,15,90],
       [0,4,8,2.5,15,45],
       [2,4,6,2.5,15,135]
   ]
   wins.forEach(e=>{
       if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&boxtexts[e[0]].innerText!==''){
       document.querySelector(".Info").innerText=boxtexts[e[0]].innerText+" WON";
       isgameover=true;
       document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
       document.querySelector(".line").style.width="25vmax";
       document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
       music.play();
       }
   })
}

//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
       if(boxtext.innerText === '' ){
           boxtext.innerText =Turn;
           Turn=changeTurn();
           audioTurn.play();
           checkWin();
           if(!isgameover){
            document.getElementsByClassName("Info")[0].innerText  = "Turn for " + Turn;
           }
       }
   })
})

//reset
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    Turn="X";
    isgameover=false;
    document.getElementsByClassName("Info")[0].innerText  = "Turn for " + Turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width = "0";
    music.pause();
}) 