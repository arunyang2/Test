// ==UserScript==
// @name         네이버카페 방문페이지 읽음 유색표시(회색)
// @author       알빠냥이
// @version      2024-10-09.rev_5
// @description  방문페이지 읽음 유색표시(회색)
// @match        https://cafe.naver.com/ArticleList.nhn*
// @match        https://cafe.naver.com/ArticleRead.nhn*
// @match        https://cafe.naver.com/MyCafeIntro.nhn*
// @icon         https://i.namu.wiki/i/jTrpSWv0M8WzqIN4yAlmdzJzwGnkOOlppmeBlpvGBTVUgFTFh2jB1cYe3FqqAs5nivbxxsXamrHBystBYJBbMUSexJyL5XEThTBRRH9Ko097HhpIUpFpnHgCOmdK6wm3AhIoJmLHazq0deITqR_ClA.webp
// @run-at       document-start
// @grant        none
// ==/UserScript==
document.head.innerHTML+=`<style>a.article:visited,a.tit:visited{color:#d3d3d3 !important;}</style>`;
