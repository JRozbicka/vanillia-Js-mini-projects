const circles =document.querySelectorAll('.circle')
const next =document.querySelectorAll('next')
const prev =document.querySelectorAll('prev')


let currentActive =1

next.addEventlistener('click',()=>{
    currentActive++
    if (currentActive > circles.length){
        currentActive === circles.length
    }
   update () 
})

prev.addEventlistener('click',()=>{
    currentActive --
    if(currentActive <  1){
        currentActive=1
    }
    update
})

function update (){

}