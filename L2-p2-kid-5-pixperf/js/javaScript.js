//  Intersection observer  //

//Wanneer een slide al actief is, verwijder je het, zodat de volgende sectie geactiveerd kan worden

//Ieder link in het menu
 //Ik kies hier bewust voor een volledige pad, zodat dit voorrang krijgt en niet wordt overwritten, door Bootstrap, wanneer ik daar ooit gebruik van maak.
let navigatieLinksNav__Item = document.querySelectorAll('nav li a');
//let navigatieLinksNav__Item = document.querySelectorAll('.nav__item');


//De section in de HTML
let alleSecties = document.querySelectorAll('section');


//START IntersectionObserver //


//
 const opties = {};

const doorsnee = (entries, observer) => {
 
 entries.forEach( entry => {

  //De classen moeten gewisseld worden in dit veld
    //dit doe je op basis van de observe value
    if (entry.isIntersecting){ //wanneer de intersecting gebeurd dan
     let link = zoekBijpassendeLink(entry.target.id);
     maakActief(link);
    }
  console.log(entry.target.id + "doorsnede" + entry.isIntersecting);
 })
}
 //IntersectionObserver neemt twee argumenten --> https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
 let observeren = new IntersectionObserver(doorsnee, opties); 

 //Er zijn vijf menu items, en die plaats je in een for loop om ze allemaal, te targeten

  //deze code zorgt er ook voor dat er een false of true komt als resultaat van de isIntersecting in de console
 for (i =0; i < navigatieLinksNav__Item.length; i++){
  observeren.observe(alleSecties[i]);
 }


  //slideIdoorsnedetrue
 if(entry.target.id){
  document.getElementsById("#"+entry.target.id).classList = 'actief'
 }

//END IntersectionObserver // 

maakActief = () =>{
 alleSecties.forEach( (link) =>{
  if (link.classList = 'actief'){
   link.classList.remove('actief');
  }
 })
}

// verwijder Actief navigatie class //
const verwijderActiefNavigatieLink = () =>{
 navigatieLinksNav__Item.forEach( (link) =>{
   //als er een classList is, verwijder die data
  // link.classList.remove('actief');

  if (link.classList.contains('actief')){
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
navigatieLinksNav__Item.forEach( (link) => {
  link.addEventListener('click', (e) => {
   //stop de actie, zodat het niet direct wordt uitgevoerd wanneer de DOM is geladen
   e.preventDefault();
   
  //Vanaf dit punt wordt de functie opgeroepen om het element actief te maken
  navigatieLinksActiefMaken(e.target);

  //via de volgende regel link je door naar de juiste locatie, welke in de href staat: href='#id'
  window.location = e.target.href;
 })
})

//geef element terug zodat het de id krijgt van de observer
const zoekBijpassendeLink = (id) => {
 let link = document.querySelector('nav li a[href="' + id + '"]');
 console.log(link + '-')

 return link;

}


//bekijk de callback functie die de andere functie oproept  -> zoekBijpassendeLink moet in iedergeval worden opgeroepen