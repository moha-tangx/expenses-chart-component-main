"use strict";
// @ts-check
(async () => {
  const res = await fetch("./data.json");
  const data = await res.json();
  let chart = document.querySelector(".chart-container");
  let today = new Date().getDay();
  data.forEach((data) => {
      chart.innerHTML += `
        <div class="chart-bar">
            <div class="amount">$${data.amount}</div>
            <div class="bar" style="height:
            ${Math.round(data.amount * 2)}px" >
            </div>
            <div>${data.day}</div>
        </div>`;
  });
  let bar = document.querySelectorAll(".bar")[today];
  bar.classList.add("today");
})();
