"use strict";

const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");

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
    dailyBtn.style.animation = "none";
    weeklyBtn.style.animation = "none";
    monthlyBtn.style.animation = "none";

    const allTimes = await getTimes();

    for (let each of allTimes) {
        let title = each.title.toLowerCase().replace(/ /g, "-");

        const currentTime = document.querySelector(`.${title}-current-time`);
        const previousTime = document.querySelector(`.${title}-last-wk-time`);

        if (currentTime && previousTime) {
            currentTime.innerText = `${each.timeframes.daily.current}hrs`;
            previousTime.innerText = `Last Week - ${each.timeframes.daily.previous}hrs`;
        } else {
            console.error("Missing Data")
        }

    }
})

weeklyBtn.addEventListener("click", async function () {
    dailyBtn.style.color = "var(--Purple-500)";
    weeklyBtn.style.color = "var(--White)";
    monthlyBtn.style.color = "var(--Purple-500)";
    dailyBtn.style.animation = "none";
    weeklyBtn.style.animation = "none";
    monthlyBtn.style.animation = "none";

    const allTimes = await getTimes();

    for (let each of allTimes) {
        let title = each.title.toLowerCase().replace(/ /g, "-");

        const currentTime = document.querySelector(`.${title}-current-time`);
        const previousTime = document.querySelector(`.${title}-last-wk-time`);

        if (currentTime && previousTime) {
            currentTime.innerText = `${each.timeframes.weekly.current}hrs`;
            previousTime.innerText = `Last Week - ${each.timeframes.weekly.previous}hrs`;
        } else {
            console.error("Missing Data")
        }

    }
})

monthlyBtn.addEventListener("click", async function () {
    dailyBtn.style.color = "var(--Purple-500)";
    weeklyBtn.style.color = "var(--Purple-500)";
    monthlyBtn.style.color = "var(--White)";
    dailyBtn.style.animation = "none";
    weeklyBtn.style.animation = "none";
    monthlyBtn.style.animation = "none";

    const allTimes = await getTimes();

    for (let each of allTimes) {
        let title = each.title.toLowerCase().replace(/ /g, "-");

        const currentTime = document.querySelector(`.${title}-current-time`);
        const previousTime = document.querySelector(`.${title}-last-wk-time`);

        if (currentTime && previousTime) {
            currentTime.innerText = `${each.timeframes.monthly.current}hrs`;
            previousTime.innerText = `Last Week - ${each.timeframes.monthly.previous}hrs`;
        } else {
            console.error("Missing Data")
        }

    }
})


