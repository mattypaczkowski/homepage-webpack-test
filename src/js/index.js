import moment from 'moment';
import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 馃殌')

/* First lines in JavaScript */

const name = "Mateusz";
const developer = "programist膮";

console.log("Cze艣膰!");
console.log(`Jestem ${name} i moim celem jest zosta膰 ${developer}.`);
console.log("Trzymaj za mnie kciuki!");

/* How to use querySelector and inner HTML */

const articel = document.querySelector(".article--js");

articel.innerHTML = `<h4 class="article__tittle">Czym s膮 frameworki i biblioteki</h4>
 <p class="article__paragraph">
 Zacznijmy od tego, co to framework lub biblioteka. Internet jest pe艂en definicji i niekt贸re z nich zak艂adaj膮, 偶e zastosowanie zasady odwr贸cenia sterowania jest g艂贸wn膮 r贸偶nic膮 mi臋dzy tymi dwoma poj臋ciami. Inne za艣 twierdz膮, 偶e biblioteka jest zbiorem metod specyficznych dla zadania, a framework to zbyt szeroki termin, kt贸ry m贸g艂by oznacza膰 tyle, co biblioteka, zbi贸r bibliotek lub co艣 jeszcze bardziej zawi艂ego.
 Na potrzeby tego artyku艂u wszyscy musimy mie膰 na uwadze, 偶e zar贸wno biblioteka, jak i framework, s膮 zbiorami metod maj膮cych na celu przyspieszenie rozwoju i wyodr臋bnienie typowych lub z艂o偶onych zada艅.
 </br>
 <i>Artyku艂 powy偶ej znajdziesz w DOM. Powsta艂 dzi臋ki w艂a艣ciwo艣ci膮 document.querySelector i artical.innerHTML.</i>
</p>`;

/* How to use functions */

function lineText(course, emoji) {
  console.log(
    `W艂a艣nie jestem w po艂owie ${course} i sprawdzam jak dzia艂aj膮 funkcj臋 ${emoji}`
  );
}

lineText("kursu WTF", "馃");

const arrowFunction = (arrow, emoji) => {
  console.log(`To samo tylko ${arrow} function ${emoji}`);
};

arrowFunction("arrow", "馃槑");

function calculate(e) {
  const x = document.querySelector("#input-x").value;
  const y = document.querySelector("#input-y").value;
  const nubmerOne = Number(x);
  const numberTwo = Number(y);
  const sum = nubmerOne + numberTwo

  console.log(sum);
  return false;
}

/* hamburger menu */

const hamburger = document.querySelector('.hamburger-js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigator');
  nav.classList.toggle('navigator__show--js');
  if (nav === true);
  const space = document.querySelector('.header')
  space.classList.toggle('header--space__js')
})

const time =  moment().format('MMMM Do YYYY');
const data = document.querySelector('.data--js');
data.innerHTML = time;


console.log(time);