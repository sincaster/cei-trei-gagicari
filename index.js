window.onload = addListeners;

function addListeners(){
    var lol = document.getElementById("welcome").addEventListener('mousedown', mouseDown, false); 
    window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('welcome');
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
} 
