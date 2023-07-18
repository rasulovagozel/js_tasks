const BUTTON1 = document.querySelector("#button-1");
const BUTTON2 = document.querySelector("#button-2");
let counter=0;

BUTTON1 && 
BUTTON1.addEventListener("click",()=>{
 counter++;
 document.getElementById("counter").textContent=counter;
})

BUTTON2 && 
BUTTON2.addEventListener("click",()=>{
 counter--;
 document.getElementById("counter").textContent=counter;
})