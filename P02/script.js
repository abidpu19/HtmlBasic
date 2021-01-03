var preloader = document.getElementById("loading");

window.onload = function () {
	setTimeout(hidefunc, 2000);
};
function hidefunc() {
	DelayNode;
	preloader.style.display = "none";
}

//variable access
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const moiveSelect = document.getElementById("movie");
let ticketPrice = +moiveSelect.value;

populateUI();

//save the selected movie alongwith price
function setMoiveData(movieIndex, moviePrice) {
	localStorage.setItem("selectedMovieIndex", movieIndex);
	localStorage.setItem("selectedMoviePrice", moviePrice);
}

//update total and count of movie and bill
function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll(".row .seat.selected");
	const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
	localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	total.innerText = selectedSeatsCount * ticketPrice;
	setMoiveData(moiveSelect.selectedIndex, moiveSelect.value);
}
// Get data from loacalstroage and populateUI ui
function populateUI() {
	const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
	if (selectedSeats !== null && selectedSeats.length > 0) {
		seats.forEach((seat, index) => {
			if (selectedSeats.indexOf(index) > -1) {
				seat.classList.add("selected");
			}
		});
	}
}

const selectedMoiveIndex = localStorage.getItem("selectedMoiveIndex");
if (selectedMoiveIndex !== null) {
	moiveSelect.selectedIndex = selectedMoiveIndex;
}

//Movie select event
moiveSelect.addEventListener("change", (e) => {
	ticketPrice = +e.target.value;
	setMoiveData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
});

//seat click event
container.addEventListener("click", (e) => {
	if (
		e.target.classList.contains("seat") &&
		!e.target.classList.contains("occupied")
	) {
		e.target.classList.toggle("selected");
		updateSelectedCount();
	}
});

updateSelectedCount();
