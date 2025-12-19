
var main = document.querySelector("#main")

let cursor = document.querySelector('#cursor')

main.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x+'px';
    cursor.style.top = dets.y+'px';
})

let body = document.body
let box = document.querySelector('#box')
body.addEventListener('keydown',function(dets){
    box.innerHTML =`${dets.code}`
    
})