// Your code goes here


const navAni = document.querySelector('.nav');
navAni.addEventListener('mouseover', function(event){
    event.target.style.color = 'red';

    setTimeout(function() {
        event.target.style.color = '#212529';
    },1000)
},false)



const keydownTest = document.querySelector('.logo-heading');
keydownTest.addEventListener('keydown', logKey);

function logKey(e){
    console.log(`You logged: ${e.key}`);
}



const onwheelTest = document.querySelector('.pWheel');
onwheelTest.addEventListener('wheel', function(event){
    event.target.style.fontSize = "45px";
})



const dragger = document.querySelector('.dragTest');
dragger.addEventListener('drag', function(event){
    event.target.style.color = 'red';
})



const dblClicker = document.querySelector('.btn');
dblClicker.addEventListener('dblclick', function(e){
    event.preventDefault();
    event.target.style.color = 'red';
})

function logSelection(event) {
    console.log('it worked');
  }
  const input = document.querySelector('.logo-heading');
  input.addEventListener('select',logSelection);


const clicker1 = document.querySelector('.btn');
clicker1.addEventListener('click', function(event){
    event.target.style.color = 'blue';
})

focusTest = document.querySelector('.yuh');
focusTest.addEventListener('focus', function(event){
    event.target.style.background = 'pink';
})

rightClick = document.querySelector('.btn');
rightClick.addEventListener('contextmenu', function(event){
    event.target.styke.color = 'yellow';
})

navDblClick = document.querySelector('.nav');
navDblClick.addEventListener('dblclick', function(event){
    event.stopPropagation()
    event.target.style.color = 'orange';
})
