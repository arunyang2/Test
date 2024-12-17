// ==UserScript==
// @name         스텔라이브 네이버카페 멤버이름 유색표시(말머리 부분)
// @author       루냥이
// @version      2024-10-13.rev1
// @description  스텔라이브 네이버카페 멤버이름 유색표시(말머리 부분)
// @match        https://*cafe.naver.com/ArticleList.nhn?search.clubid=29424353*
// @match        https://*cafe.naver.com/ArticleRead.nhn*&clubid=29424353*
// @match        https://cafe.naver.com/ca-fe/cafes/29424353*
// @icon         https://i.namu.wiki/i/Q_FCFrVYsgDw7uvNUxfq9sknhP_OVYHS228Cwbbjpj1POyNXo4J43yzeEnwoaD0ubmztVraNQonL0shv2rJLeAb4TCBIBr3xuiKkRiKchWd5R_wywdzNBKKgQzk80unFGMuhNz2gpzlMyM12komdQQ.webp
// @run-at       document-start
// @grant        none
// ==/UserScript==

document.head.innerHTML+=`<style>span.head=히나{color:#e4002b !important;}</style>
<style>span.head=타비{color:#70c5e8 !important;}</style>
<style>span.head=마시로{color:#282828 !important;}</style>
<style>span.head=리제{color:#971b2e !important;}</style>`;
