const showNumber = document.querySelector('#show-number');

const pick = document.querySelector('#pick');
const retry = document.querySelector('#re-try');
const colors= ['tomato', 'teal', 'orange','purple','blue']


const number = [];
for(let i=1; i<=45; i++){
    number.push(i);
}
let finalNumbers=[];

pick.addEventListener('click', pickNumber);
retry.addEventListener('click', removeNumber);


function pickNumber(event){
    event.preventDefault();
    
    while(finalNumbers.length<5){
        let randomNum = number[Math.floor(Math.random()*number.length)];
        if(finalNumbers.indexOf(randomNum)===-1){
            finalNumbers.push(randomNum);
            drawNum(randomNum);

        }

    }
    // finalNumbers.sort((a,b)=>a-b);
    // showNumber.innerText=finalNumbers;
    
}

function removeNumber(){
    
    finalNumbers.splice(0,6);
    showNumber.innerText=null;
}

function drawNum(number){
    const div = document.createElement('div');
    let colorIndex = Math.floor(number/10);
    
    div.textContent = number;
    div.classList.add('finalNum');
    div.style.backgroundColor = colors[colorIndex];
    showNumber.appendChild(div);
}


// pick.onclick= function pickNumber(){
//     let randomNum = Math.floor(Math.random()*number.length);
//     showNumber.innerText = number[randomNum];
// }


