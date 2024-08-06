let cardImage = document.getElementById('image-holder');
let navigationPanel = document.querySelector('.navigation');
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let zoomButton = document.querySelector(".image-zoomer");

navigationPanel.style.height = '0';

prevButton.addEventListener("click", () => {alert('prev button clicked! image changed!')});
nextButton.addEventListener("click", () => {alert('next button clicked! image changed!')});

cardImage.addEventListener("click", () => {alert('image changed!')});

cardImage.addEventListener('mouseenter', () => {navigationPanel.style.height = '50px'})
cardImage.addEventListener('mouseleave', () => {navigationPanel.style.height = '0'});

navigationPanel.addEventListener('mouseenter', () => {navigationPanel.style.height = '50px'})
navigationPanel.addEventListener('mouseleave', () => {navigationPanel.style.height = '0'});

zoomButton.addEventListener("click", () => {alert('image zoomed!')});

let card = document.getElementById('card');
console.log(`w: ${card.clientWidth}, h: ${card.clientHeight}`);
// let cardImageHolder = document.getElementById('image-holder');
// let image = document.getElementById('image');

// let cardWidthHorizontal;
// // let cardWidthVertical;
// let cardImageHolderHeight;

// gorizontalSize(document.documentElement.clientWidth);

// console.log(`w: ${image.clientWidth}, h: ${image.clientHeight}`);

// if(image.clientWidth > image.clientHeight) {
// 	gorizontalSize(document.documentElement.clientWidth);
// } else {
// 	verticalSize(document.documentElement.clientWidth);
// }

// window.addEventListener("resize", function () {
// 	gorizontalSize(document.documentElement.clientWidth);
// });

// function gorizontalSize(browserClientWidth) {
// 	if(browserClientWidth / 100 * 30 > 400) {
// 		cardWidthHorizontal = Math.round(document.documentElement.clientWidth / 100 * 30);
// 		cardImageHolderHeight = Math.round(cardWidthHorizontal / 3 * 2);
// 	} else {
// 		cardWidthHorizontal = 400;
// 		cardImageHolderHeight = Math.round(cardWidthHorizontal / 3 * 2);
// 	}
// 	card.style.width = `${cardWidthHorizontal}px`;
// 	// cardImageHolder.style.height = `${cardImageHolderHeight}px`;
// 	// image.style.width = '100%';
// 	// image.style.hight = 'auto';
// }

// function verticalSize(browserClientWidth) {
// 	if(browserClientWidth / 100 * 30 > 400) {
// 		cardWidthHorizontal = Math.round(document.documentElement.clientWidth / 100 * 30);
// 		cardImageHolderHeight = Math.round(cardWidthHorizontal / 2 * 3);
// 	} else {
// 		cardWidthHorizontal = 400;
// 		cardImageHolderHeight = Math.round(cardWidthHorizontal / 2 * 3);
// 	}
// 	card.style.width = `${cardWidthHorizontal}px`;
// 	// cardImageHolder.style.height = `${cardImageHolderHeight}px`;
// 	// image.style.width = '100%';
// 	// image.style.hight = '100%';
// }

// function prevBtnClicked () {
// 	console.log("prev button clicked!");
// }

// function nextBtnClicked () {
// 	console.log("next button clicked!");
// }


