const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{

    return ["Its monday again","We saw a batman descending","Eating pindacheese."]



}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()



function haiku1(){

    return ["Kaas","Fortnite","Minecraft."]

}


function haiku2(){
    return ["Winter is koud","zomer is warm","Ik hou van zeiken."]
}

