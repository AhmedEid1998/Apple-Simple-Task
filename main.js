//daclaretion variables
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
let mainPhoto = document.getElementById('mainPhoto');


// main function
function event (sourc , color){
    var imgSrc = sourc;
    mainPhoto.src = imgSrc;
    document.body.style.backgroundColor = color;
}


//when click
one.addEventListener('click' , function(e){
    event (e.target.src , '#000');
})

two.addEventListener('click' , function(e){
    event (e.target.src , '#247ec8');
})

three.addEventListener('click' , function(e){
    event (e.target.src , '#1e1e1e');
})

four.addEventListener('click' , function(e){
    event (e.target.src , '#c79b53');
})

five.addEventListener('click' , function(e){
    event (e.target.src , '#c82525');
})
