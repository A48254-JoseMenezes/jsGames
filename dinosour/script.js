var player = document.getElementById("player");
//var block = document.getElementsByClassName("block");
var block = document.querySelector(".block");

var playerRec = player.getBoundingClientRect() 
var blockRec = block.getBoundingClientRect()


console.log(playerRec.bottom) 
console.log(blockRec.left) 
console.log(playerRec.left)
console.log(playerRec.width) 


window.addEventListener("keydown", (e)=>{ 
    jump_character(e.key)
}) 


function jump_character(key){
    if(key == " "){
        if(!player.classList.contains("jump-player")){
        player.classList.add("jump-player") 
        setTimeout(() => {player.classList.remove("jump-player")}, 400)
        }
    }
}



setInterval(()=>{
    check_dead()
}, 10)

function check_dead(){

    blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left")) 
    playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom")) 
    blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"))
    //console.log(blockLeft)
    //console.log(playerRec.left)
    console.log(playerBottom)
    console.log(blockTop ) 
    

    if( playerBottom <=  blockRec.top /*&& blockLeft > playerLeft && blockLeft < playerRec.width + playerLeft */ ){
        console.log("hello")
        //player.classList.remove("jump-player") 
        //block.attributes
    }

}