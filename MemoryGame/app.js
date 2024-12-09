const cardArray=[
    {
        name:"fries",
        img:"MemoryGame/Image-files/images/fries.png",
    },
    {
        name:"cheeseburger",
        img:"MemoryGame/Image-files/images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img:"MemoryGame/Image-files/images/hotdog.png"
    },
    {
        name:"ice_cream",
        img:"MemoryGame/Image-files/images/ice-cream.png"
    },
    {
        name:"pizza",
        img:"MemoryGame/Image-files/images/pizza.png"
    },
    {
        name:"milkshake",
        img:"MemoryGame/Image-files/images/milkshake.png"
    },
    {
        name:"fries",
        img:"MemoryGame/Image-files/images/fries.png",
    },
    {
        name:"cheeseburger",
        img:"MemoryGame/Image-files/images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img:"MemoryGame/Image-files/images/hotdog.png"
    },
    {
        name:"ice_cream",
        img:"MemoryGame/Image-files/images/ice-cream.png"
    },
    {
        name:"pizza",
        img:"MemoryGame/Image-files/images/pizza.png"
    },
    {
        name:"milkshake",
        img:"MemoryGame/Image-files/images/milkshake.png"
    }
   
]

// console.log(cardArray);
cardArray.sort(()=>0.5-Math.random())

// console.log(cardArray);

const gridDisplay=document.querySelector("#grid");
console.log(gridDisplay);


function createBoard(){
    for(let i=0;i<10;i++){
       const card= document.createElement('img');
       card.setAttribute("src","images/blank.png");
       console.log(card,i);
    }
}
createBoard();