let card = document.getElementById('card');
let cardImageHolder = document.getElementById('image-holder');
let image = document.getElementById('image');

let cardWidthHorizontal;
// let cardWidthVertical;
let cardImageHolderHeight;

gorizontalSize(document.documentElement.clientWidth);

console.log(`w: ${image.clientWidth}, h: ${image.clientHeight}`);

if(image.clientWidth > image.clientHeight) {
	gorizontalSize(document.documentElement.clientWidth);
} else {
	verticalSize(document.documentElement.clientWidth);
}

window.addEventListener("resize", function () {
	gorizontalSize(document.documentElement.clientWidth);
});

function gorizontalSize(browserClientWidth) {
	if(browserClientWidth / 100 * 30 > 400) {
		cardWidthHorizontal = Math.round(document.documentElement.clientWidth / 100 * 30);
		cardImageHolderHeight = Math.round(cardWidthHorizontal / 3 * 2);
	} else {
		cardWidthHorizontal = 400;
		cardImageHolderHeight = Math.round(cardWidthHorizontal / 3 * 2);
	}
	card.style.width = `${cardWidthHorizontal}px`;
	// cardImageHolder.style.height = `${cardImageHolderHeight}px`;
	// image.style.width = '100%';
	// image.style.hight = 'auto';
}

function verticalSize(browserClientWidth) {
	if(browserClientWidth / 100 * 30 > 400) {
		cardWidthHorizontal = Math.round(document.documentElement.clientWidth / 100 * 30);
		cardImageHolderHeight = Math.round(cardWidthHorizontal / 2 * 3);
	} else {
		cardWidthHorizontal = 400;
		cardImageHolderHeight = Math.round(cardWidthHorizontal / 2 * 3);
	}
	card.style.width = `${cardWidthHorizontal}px`;
	// cardImageHolder.style.height = `${cardImageHolderHeight}px`;
	// image.style.width = '100%';
	// image.style.hight = '100%';
}

function prevBtnClicked () {
	console.log("prev button clicked!");
}

function nextBtnClicked () {
	console.log("next button clicked!");
}

let prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", prevBtnClicked);

let nextButton = document.querySelector(".next");
nextButton.addEventListener("click", nextBtnClicked);
