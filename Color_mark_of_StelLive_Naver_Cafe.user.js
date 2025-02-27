// ==UserScript==
// @name         스텔라이브 네이버카페 방문페이지 읽음 유색표시(회색/연분홍)
// @author       루냥이
// @version      2025-02-27.rev9
// @description  스텔라이브 네이버카페전용 방문페이지 및 공지사항 읽은 글 유색표시(회색/연분홍)
// @match        https://*cafe.naver.com/ArticleList.nhn?search.clubid=29424353*
// @match        https://*cafe.naver.com/ArticleRead.nhn*&clubid=29424353*
// @match        https://cafe.naver.com/ca-fe/cafes/29424353*
// @match        https://cafe.naver.com/f-e/cafes/29424353*
// @icon         https://i.namu.wiki/i/jTrpSWv0M8WzqIN4yAlmdzJzwGnkOOlppmeBlpvGBTVUgFTFh2jB1cYe3FqqAs5nivbxxsXamrHBystBYJBbMUSexJyL5XEThTBRRH9Ko097HhpIUpFpnHgCOmdK6wm3AhIoJmLHazq0deITqR_ClA.webp
// @run-at       document-start
// @grant        none
// ==/UserScript==

document.head.innerHTML+=`<style>a.tit:visited{color:#d3d3d3 !important;}</style>
<style>tr.board-notice.type_required{a.article:visited{color:#FFD2D2 !important;}}</style>
<style>tr.board-notice.type_main{a.article:visited{color:#FFD2D2 !important;}}</style>
<style>tr.board-notice.type_up{a.article:visited{color:#d3d3d3 !important;}}</style>
<style>#upperArticleList.article-board.m-tcol-c{a.article:visited{color:#d3d3d3 !important;}}</style>
<style>#upperArticleList.article-board.m-tcol-c{tr.board-notice.type_required{a.article:visited{color:#FFD2D2 !important;}}}</style>`;
