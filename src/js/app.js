const Item = document.querySelector(".englishclick");
const List = document.querySelector(".eng-list");
if (Item) {
    Item.addEventListener("click",()=>{
     console.log("salam");
     List.classList.toggle("active")
 
     })
}

const Item1 = document.querySelector(".unitedclick");
const List1 = document.querySelector(".united-hover");
if (Item1) {
    Item1.addEventListener("click",()=>{
     console.log("salam");
     List1.classList.toggle("united-active")
 
     })
}





const Input = document.querySelector(".emails");
if (Input) {
    Input.addEventListener("click",()=>{
        console.log("salam");
        Input.classList.toggle("inputactive")
    })
}






const Navbar = document.querySelector(".desktop-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (Navbar) {
      Navbar.classList.add("actice-nav");
    }
  } else {
    if (Navbar) {
      Navbar.classList.remove("actice-nav");
    }
  }
});



const ToTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    if (ToTop) {
      ToTop.style.display = "flex";
    }
  } else {
    document.querySelector("body").style.background = "white";
    if (ToTop) {
      ToTop.style.display = "none";
    }
  }
});
ToTop &&
  ToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });