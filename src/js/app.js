const Item = document.querySelector(".englishclick");
const List = document.querySelector(".eng-list");
if (Item) {
    Item.addEventListener("click",()=>{
     console.log("salam");
     List.classList.toggle("active")
 
     })
}