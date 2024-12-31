const myLibrary = ["hello", "world", "my", "name", "is", "alvin"];

function Book() {

}


function addBookToLibrary() {

}

function addToDom(library) {
	let containerEl = document.querySelector("#container");
	if (library.length > 0) {
		for (i in library) {
			let newCard = document.createElement("div");
			newCard.className = "card";
			let cardContent = document.createElement("p");
			cardContent.textContent = library[i];
			newCard.appendChild(cardContent);
			containerEl.appendChild(newCard);
		}
	}
}

addToDom(myLibrary);

const modal = document.querySelector("#modal");
const openBtn = document.querySelector(".addButton");
const closeBn = document.querySelector(".closeButton");

openBtn.addEventListener("click", () => modal.showModal());
