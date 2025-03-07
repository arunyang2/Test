// ==UserScript==
// @name         새담 네이버카페 방문페이지 읽음 유색표시(회색/연분홍)
// @author       루냥이
// @version      2024-12-17.rev1
// @description  새담 네이버카페전용 방문페이지 및 공지사항 읽은 글 유색표시(회색/연분홍)
// @match        https://*cafe.naver.com/ArticleList.nhn?search.clubid=30614646*
// @match        https://*cafe.naver.com/ArticleRead.nhn*&clubid=30614646*
// @match        https://cafe.naver.com/ca-fe/cafes/30614646*
// @icon         https://i.namu.wiki/i/Q_FCFrVYsgDw7uvNUxfq9sknhP_OVYHS228Cwbbjpj1POyNXo4J43yzeEnwoaD0ubmztVraNQonL0shv2rJLeAb4TCBIBr3xuiKkRiKchWd5R_wywdzNBKKgQzk80unFGMuhNz2gpzlMyM12komdQQ.webp
// @run-at       document-start
// @grant        none
// ==/UserScript==

document.head.innerHTML+=`<style>a.article:visited,a.tit:visited{color:#d3d3d3 !important;}</style>
<style>#upperArticleList.article-board.m-tcol-c{a.article:visited{color:#FFD2D2 !important;}}</style>
<style>#upperArticleList.article-board.m-tcol-c{tr.board-notice.type_up{a.article:visited{color:#d3d3d3 !important;}}}</style>`;
