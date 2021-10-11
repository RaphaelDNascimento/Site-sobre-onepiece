var noh = new Date()
var nouh2 = noh.getHours()
var seco = noh.getSeconds()
var minu = noh.getMinutes()
var res = document.getElementById('res')
var data = noh.getDate()
var mes = noh.getMonth()
res.innerHTML=` <p>${nouh2}:${minu}:${seco}</p> <p>${data}/${mes}</p> `


