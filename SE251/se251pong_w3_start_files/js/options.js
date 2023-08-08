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

function options(i)
{
    player[i].fill = changeFill[i].value;
    pad[i].fill = changeFill[i].value;
}

var opt = document.querySelector(`h2`).addEventListener(`click`, display)
console.log(opt)



function display()
{
    document.querySelector(`.sides`).classList.toggle("hidden")
    console.log(`click`)
}

for (let i = 0; i < player.length; i++)
{
    changeFill[i].addEventListener(`change`, function(){
        player[i].setProps({fill:changeFill[i].value})
        options(i)
    })
    

    options(i)
}




