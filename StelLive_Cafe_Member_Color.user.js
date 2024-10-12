// ==UserScript==
// @name         스텔라이브카페 멤버이름 유색표시
// @author       알빠냥이
// @version      2024-10-13.rev1
// @description  스텔라이브카페 멤버이름 유색표시
// @match        https://cafe.naver.com/tteokbokk1*
// @match        https://cafe.naver.com/ArticleList.nhn*
// @match        https://cafe.naver.com/ArticleRead.nhn*
// @match        https://cafe.naver.com/ca-fe/cafes*
// @icon         https://i.namu.wiki/i/m4qQ4EBnF2iQuAmSA-or1PgDvbER6RsKJjgEuX9ZlfDV5RUXPKWe00Cdl-18THY3r0p4W-K7Jm2JeDNFpDhFki01MrgYJcirq1yu-L5Usu2AeFt0MiVXDo6HPqurRh_hKs2JkSxTL2ZwLx2rE4Gc8w.svg
// @run-at       document-start
// @grant        none
// ==/UserScript==

document.head.innerHTML+=`<style>a.article:visited,a.tit:visited{color:#d3d3d3 !important;}</style>
<style>#upperArticleList.article-board.m-tcol-c{a.article:visited{color:#FFD2D2 !important;}}</style>
<style>#upperArticleList.article-board.m-tcol-c{tr.board-notice.type_up{a.article:visited{color:#d3d3d3 !important;}}}</style>`;
