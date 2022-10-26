let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = '40px';

//tag.className grabs the first instance of that tag with that className
let paraMess = document.querySelector('p.mess-with-me');
paraMess.style.background = 'green';

let hiddenDino = document.querySelector('#hide-me');
hiddenDino.style.display = 'none';

let firstDino = document.querySelector('#triceratops');
firstDino.style.width = '324px';

//EVENT LISTENERS!
spanMess.addEventListener('click', function(){ spanMess.style.color = 'orange';
})

firstDino.addEventListener('click', function(){
    firstDino.style.border = '3px solid red';
})

/*
Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.
*/

let featheredDino = document.querySelector('#feathers');

featheredDino.addEventListener('click',function(){
    featheredDino.style.opacity = '.5'
})


/* Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.
*/

let toggleButton = document.querySelector('#toggle');
let rowBackGround = document.querySelector('#row');


toggleButton.addEventListener('click',function(){
if(rowBackGround.style.background === ''){rowBackGround.style.background = 'blue'
}else if(rowBackGround.style.background = 'blue'){rowBackGround.style.background = ''};
})

/*
Add an event listener to the dinosaur with the id biggify that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be click!
*/

let biggi = document.querySelector('#biggify');

biggi.addEventListener('mouseover', function(){
 biggi.style.width = '200px'
});

biggi.addEventListener('mouseout', function(){
    biggi.style.width = ''
   })










