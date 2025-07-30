// ==UserScript==
// @name         통나무 파워 Auto Click
// @author       루냥이
// @version      2025-07-31 ver.002
// @description  치지직 1시간 라이브 시청시 생기는 통나무 파워 버튼 자동으로 클릭하는 기능
// @match        https://chzzk.naver.com/*
// @icon         https://i.namu.wiki/i/Czd1U3HQ-Xi_DUp3KGvNHhdMo4EGJiSmoXiXXeJNGtWxCJ7BLIGXsAyGOnBf4Tr-L96HnlyuWMQsc52RJIe6HmGMJGbamtc8J4LfTMet3Zw7K4Mw2H8NZRGQcUVDDHL99SPdXtKwuUEL6xUJzshAtw.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("UserScript : 통나무 파워 Auto Click,", new Date());


    const CHECK_INTERVAL_MS = 10 * 1000;

    setInterval(() => {
        const button = document.querySelector("button.live_chatting_power_button__Ov3eJ");
        if (button) {
            button.click();
            console.log("Button clicked,", new Date());
        }
    }, CHECK_INTERVAL_MS);
})();
