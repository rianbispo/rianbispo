// Ativa Links do Menu
const links = document.querySelectorAll('.header-menu a');
function linkActive(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('active');
  }
}
links.forEach(linkActive);

// Ativa links do orçamento
const params = new URLSearchParams(location.search);
function activeProduct(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
}
params.forEach(activeProduct);

// Pergutas Frequentes
function questionActive(e) {
  const question = e.currentTarget;
  const controls = question.getAttribute('aria-controls');
  const resp = document.getElementById(controls);
  resp.classList.toggle('active');
  const active = resp.classList.contains('active');
  question.setAttribute('aria-expanded', active);
}

const questions = document.querySelectorAll('.perguntas button');
function questionEvent(question) {
  question.addEventListener('click', questionActive);
}
questions.forEach(questionEvent);


// Galeria de Imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if (media) {  
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);


// Animações

if (window.SimpleAnime) {
  new SimpleAnime();
}