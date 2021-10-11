var noh = new Date();
var nouh2 = noh.getHours();
var seco = noh.getSeconds();
var minu = noh.getMinutes();
var res = document.querySelector('#res');
res.innerHTML=`${nouh2}:${minu}:${sec}`;

