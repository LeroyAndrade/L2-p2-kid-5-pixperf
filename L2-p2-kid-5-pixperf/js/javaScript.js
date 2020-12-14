//  Intersection observer  //

//Wanneer een slide al actief is, verwijder je het, zodat de volgende sectie geactiveerd kan worden

//Ieder link in het menu
 //Ik kies hier bewust voor een volledige pad, zodat dit voorrang krijgt en niet wordt overwritten, door Bootstrap, wanneer ik daar ooit gebruik van maak.
let navigatieLinks = document.querySelectorAll('nav li a');




//De section in de HTML
let alleSecties = document.querySelectorAll('section');


//START IntersectionObserver //


//
 let opties = {};


const doorsnee = (entries, observer) => {
 entries.forEach( entry =>{
  console.log(entry.target + "doorsnede " + entry.isIntersecting);
 })
}
 //IntersectionObserver neemt twee argumenten --> https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
 let observeren = new IntersectionObserver(doorsnee, opties); 
 observeren.observe(alleSecties[1]);

//END IntersectionObserver // 


// verwijder Actief navigatie class //
const verwijderActiefNavigatieLink = () =>{
 navigatieLinks.forEach( (link) =>{
   //als er een classList is, verwijder die data
  // link.classList.remove('actief');

  if (link.classList = 'actief'){
   link.classList.remove('actief');
  }
 });
}

// actief class toevoegen //
 const navigatieLinksActiefMaken = (elemen) => {
  verwijderActiefNavigatieLink();
  elemen.classList.add('actief');
 }

//Wanneer je op navigatie menu link klikt, zal de functie worden toegevoegd
 navigatieLinks.forEach( (link) => {
  link.addEventListener('click', (e) => {
   //stop de actie, zodat het niet direct wordt uitgevoerd wanneer de DOM is geladen
   e.preventDefault();
   
  //Vanaf dit punt wordt de functie opgeroepen om het element actief te maken
  navigatieLinksActiefMaken(e.target);

  //via de volgende regel link je door naar de juiste locatie, welke in de href staat: href='#id'
  window.location = e.target.href;
 })
})