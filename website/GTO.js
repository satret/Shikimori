

const title = document.createElement('title');
const header1 = document.createElement('h2');
const header2 = document.createElement('h3');
const header3 = document.createElement('h4');
const pic = document.createElement("IMG");
const div = document.createElement('div');
const iframe = document.createElement('iframe');
const picture = document.createElement('p');


document.body.style.backgroundImage = 'url(https://phonoteka.org/uploads/posts/2021-06/1624447017_16-phonoteka_org-p-oboi-belogo-tsveta-krasivo-16.jpg)';
title.innerText = 'Shikimori 2.0'
const a = document.createElement('a');
const a1 = document.createElement('a');
a.href = 'https://shikimori.one/'
a.innerText = 'Shikimori'
a1.href = 'https://shikimori.one/animes/245-great-teacher-onizuka'
a1.innerText = 'Крутой учитель онидзукаqw'
pic.src = "https://nyaa.shikimori.one/system/animes/original/245.jpg?1633691258";
header2.innerText = 'Описание'
header3.innerText = 'Бывший член нагоняющей на горожан ужас банды «Онибаку», байкер Эйкити Онидзука, ставит перед собой цель стать самым крутым школьным учителем. Почему учителем? Да просто в школах полно сексуальных старшеклассниц! Ну... почти бывший член банды...\n' +
    '        Однако тирания школьной администрации и целый класс малолетних правонарушителей стоят между Онидзукой и его целью. И любыми средствами — неважно, законными или нет, — они хотят избавиться от нового учителя. Впрочем, самого Онидзуку это не сильно беспокоит — его способы воспитания учеников вы не найдёте ни в одном учебном пособии, законность и дозволенность методов его заботит ровно настолько же, насколько его заботит разница в возрасте между ним и вожделенными старшеклассницами.'


div.appendChild(title)
div.appendChild(a)
div.appendChild(header1)
header1.appendChild(a1)
picture.appendChild(pic)
picture.appendChild(header2)
picture.appendChild(header3)


document.body.appendChild(div)
document.body.appendChild(header1)
document.body.appendChild(picture)

console.log(title)
console.log(div)
console.log(header1)
console.log(a1)
console.log(picture)
console.log(header2)
console.log(header3)
console.log(picture)