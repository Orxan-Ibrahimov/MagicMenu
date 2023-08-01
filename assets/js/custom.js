const lists = document.querySelectorAll(".list");
const indicator = document.querySelector(".indicator");

function activeLink() {
    let count = 0;
  lists.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
    
    if (!item.classList.contains("active")) count++;
    else {
      indicator.style.transform = `translateX(${this.offsetWidth * count}px)`;
      count = 0;
      console.log(indicator.style.transform);
      return 0;
    }
  });
}

  

lists.forEach((item) => {
  item.addEventListener("click", activeLink);
});
