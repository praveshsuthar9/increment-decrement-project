let leftBtn = document.querySelector(".lBtn");
let rightBtn = document.querySelector(".rBtn");

let basket1 = document.querySelector(".num-1");
let basket2 = document.querySelector(".num-2");

const totalApple = 10;

let secondbasketcount = 0;
let firstbasketcount = totalApple - secondbasketcount;

basket1.innerHTML = firstbasketcount;
basket2.innerHTML = secondbasketcount;

rightBtn.addEventListener("click", () => {
  if (firstbasketcount > 0) {
    firstbasketcount--;
    basket1.innerHTML = firstbasketcount;
    secondbasketcount++;
    basket2.innerHTML = secondbasketcount;
  }
});

leftBtn.addEventListener("click", () => {
  if (secondbasketcount > 0) {
    firstbasketcount++;
    basket1.innerHTML = firstbasketcount;
    secondbasketcount--;
    basket2.innerHTML = secondbasketcount;
  }

  
});
