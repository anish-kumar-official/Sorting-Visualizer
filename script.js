const outerDiv = document.querySelector(".outerDiv")

const createBars = () => {
    for(let i=0; i<5; i++) {
        const bar = document.createElement("div");
        bar.style.height =  Math.floor(Math.random()*101)+"px";
        bar.classList.add("bar");
        outerDiv.append(bar);
    }
}

function generate_array(){
    const modifyBars = document.querySelectorAll(".bar");
    modifyBars.forEach(eachBar => {
        eachBar.style.height = Math.floor(Math.random()*101) +"px";
    });
}

const randomNum = document.querySelector(".randomise");
randomNum.addEventListener('click', () => {
    generate_array();
})
 
const sortBTn = document.querySelector(".sort");
sortBTn.addEventListener('click', () => {
    const sort = document.querySelectorAll(".bar");
    for(let i=0;i<5;i++){
        for(let j=0;j<5-i-1;j++)
        {
            setTimeout(() => {
                sort[j].style.background = "green";
                sort[j+1].style.background = "green";
                if(parseInt(sort[j].style.height)>parseInt(sort[j+1].style.height)){
                   let temp = parseInt(sort[j].style.height);
                   sort[j].style.height = parseInt(sort[j+1].style.height) + "px";
                   sort[j+1].style.height = temp+"px";
                }
                sort[j].style.background = "black";
                sort[j+1].style.background = "black";
            }, 10000);
        }
    }
})
 