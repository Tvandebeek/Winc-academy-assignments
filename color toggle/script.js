// DOM Elements
var body = document.body;
var menu = document.querySelector('.menu');
var menuBlock = document.querySelector('.menu-block');
var menuItems = document.querySelectorAll('.menu-item');

//mouseover toevoegen, en mouseout event listener voor "hover over nav"
menu.addEventListener('mouseover', function(e) {
	menuBlock.classList.add('visible');
})

menu.addEventListener('mouseout', function(e) {
	menuBlock.classList.remove('visible');
})

/* functie om achtergrondkleur te veranderen. Hierbij gebruik 
   gemaakt van dataset attribute. (data.color- tag in html). Ik kan 
   niet echt het spoor vinden om het op een andere manier te laten
   toggelen qua kleur, zit een beetje vast. Graag zou ik hier nog wat
   meer specifieke hulp bij krijgen. Zeker als het nodig is om de opdracht te halen*/

menuItems.forEach(function(color){
	color.addEventListener('click', function() {
    
    if (color.id === 'home') {
    	changeBg(color, "Home")
      return;
    }
    
    changeBg(color, color.dataset.color);
  });
})


// Helper functions

//Function om achtergrond en text te veranderen. Ook weer met dataset. Gelukt met hulp ;-)
function changeBg(el, text) {
    body.style.background = el.dataset.color;
    menuBlock.classList.toggle('visible');
    document.querySelector('h1').textContent = capitalize(text); /*deze heb ik al "hint" gekregen van m'n kennis, 
                                                                 snap het "capitalize" niet helemaal. De hoofdletters zijn
                                                                 al via "uppercase", dit zorgt juist voor het goede woord.*/ 
    toggleActive(el);
    return;
}

var menuContent = document.querySelector('menu-content li');

function changeBgLink(x, color) {
  menuContent = x.dataset.color;
}

// Functions om menu naam actief te krijgen in de tekst vd website
function toggleActive(item) {
	var activeItem = document.querySelector('.active');
  if (activeItem) {
  	activeItem.classList.remove('active');
  }
  item.classList.add('active');
}

// Function om woord in tekst daadwerkelijk te veranderen in de "menu naam"
function capitalize(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

//Functions voor sliding menu, dacht ik... maar dit werkt niet meer zoals 
function openMenu() {
  document.getElementById("menu-block").style.width = "250px";
}

function closeMenu() {
  document.getElementById("menu-block").style.width = "0";
}


/*radio button 'uncheck' code, maar die werkt ook niet zoals ik dat wil. Ik krijg de 
buttons niet gekoppeld aan de juiste kleur. Dus ik dacht een soort groep maken, maar 
geen tijd meer helaas*/

function check() {
  document.getElementByName("choose-home").checked = true;
}
function uncheck() {
  document.getElementById("choose-home").checked = false;
}



