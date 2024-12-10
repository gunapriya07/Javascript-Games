
const grid=document.querySelector('.grid')
const blockwidth=100
const blockheight=20

// create block 
class Block{
    constructor(xAxis,yAxis){
        this.bottomLeft=[xAxis,yAxis]
        this.bottomRigth=[xAxis+blockwidth,yAxis]
        this.topLeft=[xAxis,yAxis+blockheight]
        this.topRight=[xAxis+blockwidth,yAxis+blockheight]
    }
}

const blocks=[
    new Block(10,270),
   new Block(120,270),
   new Block(230,270),
   new Block(340,270),
   new Block(450,270),
   new Block(10,240),
   new Block(120,240),
   new Block(230,240),
   new Block(340,240),
   new Block(450,240),
   new Block(10,210),
   new Block(120,210),
   new Block(230,210),
   new Block(340,210),
   new Block(450,210),
]




// draw my block
function addBlock(){
     for(let i=0;i<blocks.length;i++){
        const block=document.createElement('div')
        block.classList.add('block')
        block.style.left=blocks[i].bottomLeft[0]+'px'
        block.style.bottom=blocks[i].bottomLeft[i]+'px'
        grid.appendChild(block)
     }
}
addBlock();


// add user:
const user=document.createElement('div')
user.classList.add('user')
user.
grid.appendChild(user)

