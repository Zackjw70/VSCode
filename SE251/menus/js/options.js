/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

var changeFill = document.querySelectorAll(`.fill`)
var changeStroke = document.querySelectorAll(`.stroke`)
var changeUp = document.querySelectorAll(`.u`)
var changeDown = document.querySelectorAll(`.d`)
var changeStraight = document.querySelectorAll(`.s`)
var sideSelect = document.querySelector(`.sides`)
var swapMode = document.querySelector(`.switchcolor`)

function options(i)
{
    player[i].fill = changeFill[i].value;
    pad[i].fill = player[i].fill;
    pad[i].stroke = changeStroke[i].value;

}

var opt = document.querySelector(`h2`).addEventListener(`click`, display)
console.log(opt)


swapMode.addEventListener(`click`, function(){
    document.querySelector(`main`).classList.toggle("textdark")
    document.querySelector(`canvas`).classList.toggle("canvaslight")
    playerswapcolor = document.querySelectorAll(`.op`)
    playerswapcolor[0].classList.toggle("textdark")
    playerswapcolor[1].classList.toggle("textdark")

    document.querySelector(`body`).classList.toggle("backgroundlight")
})


function display()
{
    document.querySelector(`.sides`).classList.toggle("hidden")
    console.log(`click`)
}

for (let i = 0; i < player.length; i++)
{
    changeFill[i].addEventListener(`input`, function(){
        player[i].setProps({fill:changeFill[i].value})
        options(i)
    })
    changeStroke[i].addEventListener(`input`, function(){
        player[i].setProps({fill:changeStroke[i].value})
        options(i)
    })
    changeUp[i].addEventListener(`keydown`, function(e){
        changeUp[i].value = e.key
        player[i].keys.u = changeUp[i].value
        
    })
    changeDown[i].addEventListener(`keydown`, function(e){
        changeDown[i].value = e.key
        player[i].keys.d = changeDown[i].value
        
    })

    
    changeStraight[i].addEventListener(`keydown`, function(e){
        changeStraight[i].value = e.key
        player[i].keys.s = changeStraight[i].value
        
    })

    changeUp[i].addEventListener(`focus`, function(){
        currentState = `pause`
    })

    changeDown[i].addEventListener(`focus`, function(){
        currentState = `pause`
    })
    changeStraight[i].addEventListener(`focus`, function(){
        currentState = `pause`
    })

    

    
    
    

    options(i)
}




