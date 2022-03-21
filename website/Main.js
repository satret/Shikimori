
const div = document.createElement('div');
const header1 = document.createElement('h1');
const header2 = document.createElement('h2');
const title = document.createElement('title');
const iframe = document.createElement('iframe');
//document.body.style.backgroundImage = 'url(https://phonoteka.org/uploads/posts/2021-06/1624447017_16-phonoteka_org-p-oboi-belogo-tsveta-krasivo-16.jpg)';

const p1 = document.createElement('p');
const p2 = document.createElement('p');

const a = document.createElement('a');
const a1 = document.createElement('a');
const a2 = document.createElement('a');


title.innerText = 'Shikimori 2.0'
header1.innerText = 'Топ 10 аниме'
a.href = 'https://shikimori.one/'
a.innerText = 'Shikimori'
a1.href = 'http://localhost:63342/untitled/GTO.html?_ijt=7u38hbg9hhsgg4g6m0seln02r&_ij_reload=RELOAD_ON_SAVE'
a1.innerText = '1) Крутой учитель онидзука'
a2.href = 'http://localhost:63342/untitled/Nisekoi.html?_ijt=56sph7s6d5pi5je6gsue3fn676&_ij_reload=RELOAD_ON_SAVE'
a2.innerText = '2) Притворная любовь'


div.appendChild(header1)
div.appendChild(title)
div.appendChild(a)

p1.appendChild(a1)
p2.appendChild(a2)


//
document.body.appendChild(div)
document.body.appendChild(p1)
document.body.appendChild(p2)
document.body.appendChild(header2)
//добавление div в body
//

//добавляем элементы
console.log(a)
console.log(a1)
console.log(a2)
console.log(p1)
console.log(p2)
console.log(title)
console.log(div)
console.log(header1)
console.log(header2)

//document.body.appendChild(header2)
//console.log(a1)
//console.log(a2)