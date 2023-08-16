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

function invertColor(hex){
    if (hex.indexOf(`#`) === 0){
        hex = hex.slice(1);
    }
    if (hex.length === 3){
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }
    if (hex.length !==6){
        throw new Error('Invalid Hex Color.');
    }
    var r = (255 - parseInt(hex.slice(0,2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2,4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4,6), 16)).toString(16);
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str,len){
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);

}

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
    console.log(player[0].fill)

    
    var opPadColor1 = invertColor(player[0].fill)
    var opStrokeColor1 = invertColor(pad[0].stroke)
    var opPadColor2 = invertColor(player[1].fill)
    var opStrokeColor2 = invertColor(pad[1].stroke)
    
    console.log(opPadColor1)

    changeStroke[0].value = opStrokeColor1
    changeStroke[1].value = opStrokeColor2

    changeFill[0].value = opPadColor1
    changeFill[1].value = opPadColor2


    document.querySelector(`body`).classList.toggle("backgroundlight")
    options(1)
    options(0)
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

    

    
    
    

    
}




