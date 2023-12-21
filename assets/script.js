const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const nbslides = slides.length;
console.log (nbslides)
const flechedroite = document.querySelector('.arrow_right');
const flechegauche = document.querySelector('.arrow_left');
let number = 0;
const dots = document.querySelectorAll('.dot');


function slidesuivant() {
	
	number++;
	if (number > nbslides - 1) {
		number = 0
	}
	
	console.log(number)

	displaySlide(number)

}

function displaySlide(number) {
	src="./assets/images/slideshow/"+slides[number]["image"]
	console.log(src)
	const image = document.querySelector('.banner-img');
	image.src = src
	console.log(image.src)

// Intégrer le texte tagLine de chaque slide

let tagLine = document.querySelector("#banner p")



tagLine.innerHTML = slides[number]["tagLine"]
dot = document.querySelector("#dot" +number)


}

// Affichage du dot_selected sur le slide actuel

function dotSelected() {
	if(number === 0) {
		dot.classList.add("dot_selected");
	}
	
}
	

flechedroite.addEventListener('click', slidesuivant)


function slideprecedent() {
	
number--;
if (number < 0) {
	number = nbslides - 1
}


	displaySlide(number)

	}

flechegauche.addEventListener('click', slideprecedent)





for (let compteur = 0; compteur < nbslides; compteur = compteur + 1) {

    let dot = document.createElement("div");

dot.classList.add("dot") 
dot.setAttribute("data-index", compteur);

dot.setAttribute("id", "dot"+compteur);



dot.addEventListener('click', slidedot)



}

function slidedot () {
	console.log("jai cliqué ici")
	console.log(this)

console.log(this.getAttribute("data-index"))
	
	

	number = this.getAttribute("data-index")

	displaySlide(number)

	

}



  



