import moment from 'moment';
import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

/* First lines in JavaScript */

const name = "Mateusz";
const developer = "programistą";

console.log("Cześć!");
console.log(`Jestem ${name} i moim celem jest zostać ${developer}.`);
console.log("Trzymaj za mnie kciuki!");

/* How to use querySelector and inner HTML */

const articel = document.querySelector(".article--js");

articel.innerHTML = `<h4 class="article__tittle">Czym są frameworki i biblioteki</h4>
 <p class="article__paragraph">
 Zacznijmy od tego, co to framework lub biblioteka. Internet jest pełen definicji i niektóre z nich zakładają, że zastosowanie zasady odwrócenia sterowania jest główną różnicą między tymi dwoma pojęciami. Inne zaś twierdzą, że biblioteka jest zbiorem metod specyficznych dla zadania, a framework to zbyt szeroki termin, który mógłby oznaczać tyle, co biblioteka, zbiór bibliotek lub coś jeszcze bardziej zawiłego.
 Na potrzeby tego artykułu wszyscy musimy mieć na uwadze, że zarówno biblioteka, jak i framework, są zbiorami metod mających na celu przyspieszenie rozwoju i wyodrębnienie typowych lub złożonych zadań.
 </br>
 <i>Artykuł powyżej znajdziesz w DOM. Powstał dzięki właściwością document.querySelector i artical.innerHTML.</i>
</p>`;

/* How to use functions */

function lineText(course, emoji) {
  console.log(
    `Właśnie jestem w połowie ${course} i sprawdzam jak działają funkcję ${emoji}`
  );
}

lineText("kursu WTF", "🤔");

const arrowFunction = (arrow, emoji) => {
  console.log(`To samo tylko ${arrow} function ${emoji}`);
};

arrowFunction("arrow", "😎");

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