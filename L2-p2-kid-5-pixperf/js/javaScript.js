//Wanneer een slide al actief is, verwijder je het, zodat de volgende sectie geactiveerd kan worden

let navigatieLinks = document.querySelectorAll('nav li a');

const verwijderActiefNavigatieLink = () =>{
 navigatieLinks.forEach( (link) =>{
   //als er een classList is, verwijder die data
  // link.classList.remove('actief');

  if (link.classList = 'actief'){
   link.classList.remove('actief');
  }
 });
}

//actief class toevoegen
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