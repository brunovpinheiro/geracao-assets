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

// Manipula os cliques em links internos
document.addEventListener("click", (e) => {
	// Verifica se é um link
	const link = e.target.closest("a");
	if (!link) return;

	// Verifica se é um link interno (começa com #)
	const href = link.getAttribute("href");
	if (!href?.startsWith("#")) return;

	// Previne o comportamento padrão
	e.preventDefault();

	// Remove o # do início do href para obter o id
	const targetId = href.substring(1);
	const targetElement = document.getElementById(targetId);

	// Se o elemento existir, faz o scroll
	if (targetElement) {
		lenis.scrollTo(targetElement, {
			offset: -80, // Ajuste conforme necessário
			duration: 2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});
	}
});

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

// SWIPER DEPOIMENTOS
// const swiperDepoimentos = new Swiper(".swiper-depoimentos", {
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// });

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
$(".nav_menu_solucoes").on("click", function () {
	$(".menu-solucoes_overlay").toggleClass("open");
});

// Create a timeline for the menu solutions animation
const menuSolucoesTimeline = gsap.timeline({
	paused: true,
});

// Add the stagger animation to the timeline
menuSolucoesTimeline.from(".menu-solucoes > *", {
	y: -30,
	opacity: 0,
	duration: 0.6,
	stagger: 0.3,
	ease: "power2.out",
});

// Function to handle menu overlay animation
function handleMenuSolucoesAnimation() {
	const menuOverlay = document.querySelector(".menu-solucoes_overlay");

	// Create a MutationObserver to watch for class changes
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.attributeName === "class") {
				const isOpen = menuOverlay.classList.contains("open");

				if (isOpen) {
					menuSolucoesTimeline.restart();
				} else {
					menuSolucoesTimeline.reverse();
				}
			}
		});
	});

	// Start observing the menu overlay element
	observer.observe(menuOverlay, {
		attributes: true,
	});
}

// Initialize the animation handler
handleMenuSolucoesAnimation();
