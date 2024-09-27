a = document.getElementById('poperius')
ctx = a.getContext('2d')
Xp =window.innerWidth
Yp =window.innerHeight
a.height = Yp
a.width = Xp

x = 0
y = 10
document.addEventListener('keydown', e=>{
    console.log(e.key)
    if(e.key == 'd'){
        x+= 5
    }
    if(e.key == 'a'){
        x-= 5
    }
    if(e.key == 'w'){
        y-= 5
    }
    if(e.key == 's'){
        y+= 5
    }
})
function main(){
    ctx.clearRect(0,0,Xp,Yp)
    ctx.fillRect(x,y,50,50)
    requestAnimationFrame(main)
}
main()