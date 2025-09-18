"use strict";

const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");
const currentWorkTime = document.querySelector(".work-current-time");
const previousWorkTime = document.querySelector(".work-last-wk-time");

async function getTimes() {
    try {
        const response = await fetch("./data/data.json")

        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        console.log(data)
    }
    catch (error) {
        console.error(error);
    }
}

dailyBtn.addEventListener("click", function () {
    // dailyBtn.style.color = "var(--white)";
    console.log("click");
})
