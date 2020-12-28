function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("_webp");
	} else {
		document.querySelector("body").classList.add("_no-webp");
	}
});

let sectionLinks = document.querySelectorAll('a[href*="#"]');
for (let index = 0; index < sectionLinks.length; index++) {
	const sectionLink = sectionLinks[index];
	sectionLink.addEventListener("click", function (e) {
		e.preventDefault();
		const blockId = sectionLink.getAttribute("href");
		const block = document.querySelector("" + blockId);
		let header = document.querySelector(".header");
		window.scrollTo({
			top: `${block.offsetTop - header.offsetHeight}`,
			behavior: "smooth",
		});
	});
}

// SCROLL ANIMATION
let scrollBlocks = document.querySelectorAll("._anim");
for (let index = 0; index < scrollBlocks.length; index++) {
	const scrollBlock = scrollBlocks[index];
	const scrollBlockTop = scrollBlock.getBoundingClientRect().top;
	if (scrollBlocks.length > 0) {
		window.addEventListener("scroll", function (e) {
			if (scrollBlock.getBoundingClientRect().top < 600) {
				scrollBlock.classList.remove("_scroll");
			} else {
				scrollBlock.classList.add("_scroll");
			}
		});
	}
}

let body = document.querySelector("body");
let menuIcon = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let menuLinks = document.querySelectorAll(".header__link");
menuIcon.addEventListener("click", function (e) {
	menuIcon.classList.toggle("_active");
	menu.classList.toggle("_active");
	body.classList.toggle("_lock");
});
document.addEventListener("click", function (e) {
	if (
		(menu.classList.contains("_active") && e.target.classList.contains("header__link")) ||
		e.target.classList.contains("logo")
	) {
		menuIcon.classList.remove("_active");
		menu.classList.remove("_active");
		body.classList.remove("_lock");
	}
});
;

