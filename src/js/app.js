const Item = document.querySelector(".englishclick");
const List = document.querySelector(".eng-list");
if (Item) {
    Item.addEventListener("click",()=>{
     console.log("salam");
     List.classList.toggle("active")
 
     })
}



const Input = document.querySelector(".emails");
if (Input) {
    Input.addEventListener("click",()=>{
        console.log("salam");
        Input.classList.toggle("inputactive")
    })
}