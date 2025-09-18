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
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

dailyBtn.addEventListener("click", async function () {
    dailyBtn.style.color = "var(--White)";
    weeklyBtn.style.color = "var(--Purple-500)";
    monthlyBtn.style.color = "var(--Purple-500)";

    const allTimes = await getTimes();

    for (let each of allTimes) {
        if (each["title"].toLowerCase() == "work") {
            currentWorkTime.innerText = `${each["timeframes"]["daily"]["current"]}hrs`
        }
    }
})

// weeklyBtn.addEventListener("click", function () {
//     dailyBtn.style.color = "var(--Purple-500)";
//     weeklyBtn.style.color = "var(--White)";
//     monthlyBtn.style.color = "var(--Purple-500)";

// })

// monthlyBtn.addEventListener("click", function () {
//     dailyBtn.style.color = "var(--Purple-500)";
//     weeklyBtn.style.color = "var(--Purple-500)";
//     monthlyBtn.style.color = "var(--White)";

// })