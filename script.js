const myLibrary = [];

function bookConstructor(e) {
	this.book = {title: e.target[0].value,
				 author: e.target[1].value,
				 pages: e.target[2].value,
				 read: e.target[3].value,};
	e.target[0].value = "";
	e.target[1].value = "";
	e.target[2].value = "";
	e.target[3].value = "";

}

function addToDom(library) {
	let containerEl = document.querySelector("#container");
	if (library.length > 0) {
		for (i in library) {
			let newCard = document.createElement("div");
			newCard.className = "card";
			
			let cardContentOne = document.createElement("h4");
			cardContentOne.textContent = `Title: ${library[i].title}`;
			newCard.appendChild(cardContentOne);
			
			let cardContentTwo = document.createElement("p");
			cardContentTwo.textContent = `Author: ${library[i].author}`;
			newCard.appendChild(cardContentTwo);
			
			let cardContentThree = document.createElement("p");
			cardContentThree.textContent = `Pages: ${library[i].pages}`;
			newCard.appendChild(cardContentThree);
			
			let cardContentFour = document.createElement("p");
			cardContentFour.className = "read";
			if (library[i].read == "on" || library[i].read == "") {
				cardContentFour.textContent = "Read: No";
			} else {
				cardContentFour.textContent = "Read: Yes";
			}		
			newCard.appendChild(cardContentFour);
			let btnDiv = document.createElement("div");
			let removeBtn = document.createElement("button");
			removeBtn.textContent= "remove";
			removeBtn.className = "remove";
			btnDiv.appendChild(removeBtn);
			let changeBtn= document.createElement("button");
			changeBtn.textContent= "change read status";
			changeBtn.className = "change";
			btnDiv.appendChild(changeBtn);
			newCard.appendChild(btnDiv);
			containerEl.appendChild(newCard);
		}
	}
}

addToDom(myLibrary);

const modal = document.querySelector("#modal");
const openBtn = document.querySelector(".addButton");
const formEl = document.querySelector("form");

openBtn.addEventListener("click", () => modal.showModal());
formEl.addEventListener("submit", (e) => {
						let tt = new bookConstructor(e);
						myLibrary.push(tt.book);
						addToDom([myLibrary[myLibrary.length -1]]);
	
						modal.close()
});

let cardContainer = document.querySelector(".content");
cardContainer.addEventListener("click", (e) => {
		if (e.target.className == "remove") {
			for (i in myLibrary) {
				if (myLibrary[i]["title"] == e.target.parentNode.
					parentNode.querySelector("h4").textContent.
					replace("Title: ", "")) {
						myLibrary.splice(Number(i), 1);
				}
			}
			e.target.parentNode.parentNode.remove();
		} else if (e.target.className == "change") {
			if (e.target.parentNode.parentNode.querySelector('.read').textContent == "Read: No") {
				e.target.parentNode.parentNode.querySelector('.read'    ).textContent = "Read: Yes";
			} else {
				e.target.parentNode.parentNode.querySelector('.read'    ).textContent = "Read: No"
			}
		}
})
		



