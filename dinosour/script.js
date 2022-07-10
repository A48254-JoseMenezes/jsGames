var player = document.getElementById("player");
//var block = document.getElementsByClassName("block");
var block = document.querySelector(".block");

var playerRec = player.getBoundingClientRect() 
var blockRec = block.getBoundingClientRect()


console.log(playerRec.bottom) 
console.log(blockRec.top)


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
}, 100)

function check_dead(){
  
    
    if( playerRec.bottom >=  blockRec.top && playerRec.left < blockRec.left  ){
        console.log("hello")
        //player.classList.remove("jump-player") 
        //block.attributes
    }

}