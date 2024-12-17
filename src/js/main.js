// LENIS
const lenis = new Lenis({
	duration: 1.2,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	orientation: "vertical",
	smoothWheel: true,
	lerp: 2,
});

// 2. RAF loop
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// NAVBAR SCROLL
$(window).on("scroll", function () {
	let scrollPosition = $(window).scrollTop();
	let scrollThreshold = $(document).height() * 0.05;

	if (scrollPosition > scrollThreshold) {
		$(".nav_component").addClass("is-scroll");
	} else {
		$(".nav_component").removeClass("is-scroll");
	}
});

// SPLIT TEXT ANIMATIONS
let splitType = new SplitType("[data-text-split]", { types: "lines, words", tagName: "span" });

$("[data-text-split]").each(function (index) {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: $(this),
			start: "top bottom", // Trigger animation when top of element hits bottom of viewport
			end: "top 80%", // End when element is 70% from the top of the viewport
			toggleActions: "none play none reset",
		},
	});

	// Make the text visible before animation starts
	tl.set($(this), { visibility: "visible" });

	// Animate each line with a stagger between them
	tl.from($(this).find(".line"), {
		opacity: 0,
		yPercent: 100,
		duration: 0.6,
		ease: "power2.out",
		stagger: { each: 0.2 }, // Stagger of 200ms between each line
	});

	// Animate words inside the lines with another stagger
	tl.from(
		$(this).find(".word"),
		{
			opacity: 0,
			yPercent: 100,
			duration: 0.4,
			ease: "power2.out",
			stagger: { each: 0.05 }, // Stagger of 50ms between each word
		},
		"<"
	); // "<" means both animations start at the same time
});

// SWIPER DEPOIMENTOS
const swiperDepoimentos = new Swiper(".swiper-depoimentos", {
	slidesPerView: 3,
	spaceBetween: 30,
});

// ACCORDION
const accordionHeadings = document.querySelectorAll(".accordion_item-heading");

// Adiciona o evento de clique em cada header
accordionHeadings.forEach((heading) => {
	heading.addEventListener("click", () => {
		// Pega o elemento pai (accordion_item)
		const accordionItem = heading.closest(".accordion_item");

		// Primeiro, fecha todos os itens
		document.querySelectorAll(".accordion_item").forEach((item) => {
			item.setAttribute("data-expand", "false");
		});

		// Depois, abre apenas o item clicado
		accordionItem.setAttribute("data-expand", "true");
	});
});

// SOLUCOES MENU
$(".menu-solucoes").on("click", function () {
	$(".menu-solucoes_overlay").toggleClass("open");
});
