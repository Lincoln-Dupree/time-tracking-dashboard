"use strict";

const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");
const currentWorkTime = document.querySelector(".work-current-time");
const previousWorkTime = document.querySelector(".work-last-wk-time");
const currentPlayTime = document.querySelector(".play-current-time");
const previousPlayTime = document.querySelector(".play-last-wk-time");
const currentStudyTime = document.querySelector(".study-current-time");
const previousStudyTime = document.querySelector(".study-last-wk-time");
const currentExerciseTime = document.querySelector(".exercise-current-time");
const previousExerciseTime = document.querySelector(".exercise-last-wk-time");
const currentSocialTime = document.querySelector(".social-current-time");
const previousSocialTime = document.querySelector(".social-last-wk-time");
const currentSelfCareTime = document.querySelector(".self-care-current-time");
const previousSelfCareTime = document.querySelector(".self-care-last-wk-time");


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
            currentWorkTime.innerText = `${each.timeframes.daily.current}hrs`;
            previousWorkTime.innerText = `Last Week - ${each.timeframes.daily.previous}hrs`;
        }
        if (each["title"].toLowerCase() == "play") {
            currentPlayTime.innerText = `${each.timeframes.daily.current}hrs`;
            previousPlayTime.innerText = `Last Week - ${each.timeframes.daily.previous}hrs`;
        }
        if (each["title"].toLowerCase() == "study") {
            currentStudyTime.innerText = `${each.timeframes.daily.current}hrs`;
            previousStudyTime.innerText = `Last Week - ${each.timeframes.daily.previous}hrs`;
        }
        if (each["title"].toLowerCase() == "exercise") {
            currentExerciseTime.innerText = `${each.timeframes.daily.current}hrs`;
            previousExerciseTime.innerText = `Last Week - ${each.timeframes.daily.previous}hrs`;
        }
        if (each["title"].toLowerCase() == "social") {
            currentSocialTime.innerText = `${each.timeframes.daily.current}hrs`;
            previousSocialTime.innerText = `Last Week - ${each.timeframes.daily.previous}hrs`;
        }
        if (each["title"].toLowerCase() == "self care") {
            currentSelfCareTime.innerText = `${each.timeframes.daily.current}hrs`;
            previousSelfCareTime.innerText = `Last Week - ${each.timeframes.daily.previous}hrs`;
        }
    }
})

weeklyBtn.addEventListener("click", function () {
    dailyBtn.style.color = "var(--Purple-500)";
    weeklyBtn.style.color = "var(--White)";
    monthlyBtn.style.color = "var(--Purple-500)";

})

monthlyBtn.addEventListener("click", function () {
    dailyBtn.style.color = "var(--Purple-500)";
    weeklyBtn.style.color = "var(--Purple-500)";
    monthlyBtn.style.color = "var(--White)";

})