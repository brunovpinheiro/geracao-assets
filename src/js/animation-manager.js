// Gerenciador de Animações
const SlideAnimations = {
	// Configurações padrão das animações
	defaults: {
		duration: 1,
		ease: "power2.out",
		delay: 0.3, // Delay para sincronizar com o efeito fade
	},

	// Animações específicas para cada tipo de slide
	slides: {
		hero: {
			elements: [
				{
					selector: ".hero-title",
					animation: {
						from: { opacity: 0, y: 50 },
						to: { opacity: 1, y: 0 },
						duration: 0.5,
						delay: 0.2,
					},
				},
				{
					selector: ".hero-text",
					animation: {
						from: { opacity: 0, y: -50 },
						to: { opacity: 1, y: 0 },
						duration: 0.5,
					},
				},
				{
					selector: ".line-scroll",
					animation: {
						from: { opacity: 0, scaleY: 0, transformOrigin: "top" },
						to: { opacity: 1, scaleY: "100%" },
						duration: 0.5,
						delay: 0.1,
					},
				},
			],
		},
		intro: {
			elements: [
				{
					selector: ".line-scroll.is-top",
					animation: {
						from: { opacity: 0, scaleY: 0, transformOrigin: "top" },
						to: { opacity: 1, scaleY: "100%" },
						duration: 0.5,
						delay: 0.3,
					},
				},
				{
					selector: ".badge",
					animation: {
						from: { opacity: 0, y: 30 },
						to: { opacity: 1, y: 0 },
						duration: 0.3,
					},
				},
				{
					selector: ".intro-title",
					animation: {
						from: { opacity: 0, y: 30 },
						to: { opacity: 1, y: 0 },
						duration: 0.3,
					},
				},
				{
					selector: ".intro-text",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.3,
					},
				},
				{
					selector: ".line-scroll",
					animation: {
						from: { opacity: 0, scaleY: 0, transformOrigin: "top" },
						to: { opacity: 1, scaleY: "100%" },
						duration: 0.5,
						delay: 0.2,
					},
				},
			],
		},
		beneficios: {
			elements: [
				{
					selector: "[beneficio='left'] .card-beneficio_line-wrapper",
					animation: {
						from: { scaleX: 0, transformOrigin: "right" },
						to: { scaleX: 1 },
						duration: 0.8,
						delay: 0.7,
					},
				},
				{
					selector: "[beneficio='left'] .box-glass",
					animation: {
						from: { opacity: 0, x: 50 },
						to: { opacity: 1, x: 0 },
						duration: 0.3,
					},
				},
				{
					selector: "[beneficio='right'] .card-beneficio_line-wrapper",
					animation: {
						from: { scaleX: 0, transformOrigin: "left" },
						to: { scaleX: 1 },
						duration: 0.3,
						delay: 0.1,
					},
				},
				{
					selector: "[beneficio='right'] .box-glass",
					animation: {
						from: { opacity: 0, x: -50 },
						to: { opacity: 1, x: 0 },
						duration: 0.3,
					},
				},
			],
		},
		introServicos: {
			elements: [
				{
					selector: ".intro-servicos_title",
					animation: {
						from: { opacity: 0, y: 30 },
						to: { opacity: 1, y: 0 },
						duration: 0.3,
						delay: 0.2,
					},
				},
				{
					selector: ".intro-servicos_text",
					animation: {
						from: { opacity: 0, y: 30 },
						to: { opacity: 1, y: 0 },
						duration: 0.3,
					},
				},
				{
					selector: ".line-scroll",
					animation: {
						from: { opacity: 0, scaleY: 0, transformOrigin: "top" },
						to: { opacity: 1, scaleY: "100%" },
						duration: 0.5,
						delay: 0.2,
					},
				},
			],
		},
		servicoEstrategia: {
			elements: [
				{
					selector: ".card-service",
					animation: {
						from: { opacity: 0, x: -100 },
						to: { opacity: 1, x: 0 },
						duration: 0.3,
						delay: 0.2,
					},
				},
				{
					selector: ".badge",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_title",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_text",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.3,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_button",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
					},
				},
			],
		},
		servicoGestao: {
			elements: [
				{
					selector: ".card-service",
					animation: {
						from: { opacity: 0, x: 100 },
						to: { opacity: 1, x: 0 },
						duration: 0.3,
						delay: 0.2,
					},
				},
				{
					selector: ".badge",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_title",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_text",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.3,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_button",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
					},
				},
			],
		},
		servicoRelacionamento: {
			elements: [
				{
					selector: ".card-service",
					animation: {
						from: { opacity: 0, x: -100 },
						to: { opacity: 1, x: 0 },
						duration: 0.3,
						delay: 0.2,
					},
				},
				{
					selector: ".badge",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_title",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_text",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.3,
						stagger: 0.1,
					},
				},
				{
					selector: ".card-service_button",
					animation: {
						from: { opacity: 0, y: 20 },
						to: { opacity: 1, y: 0 },
						duration: 0.2,
					},
				},
			],
		},
	},

	// Método para criar timeline de um slide
	createTimeline(slide, slideType) {
		const tl = gsap.timeline({ paused: true });
		const slideConfig = this.slides[slideType];

		if (!slideConfig) return tl;

		// Configurar estado inicial dos elementos
		slideConfig.elements.forEach((element) => {
			const target = slide.querySelector(element.selector);
			if (target) {
				gsap.set(target, element.animation.from);
			}
		});

		// Adicionar animações à timeline
		slideConfig.elements.forEach((element) => {
			const target = slide.querySelector(element.selector);
			if (target) {
				const animation = {
					...this.defaults,
					...element.animation.to,
					duration: element.animation.duration || this.defaults.duration,
					delay: element.animation.delay || 0,
				};

				tl.to(target, animation, element.animation.delay ? `+=${element.animation.delay}` : "+=0");
			}
		});

		return tl;
	},
};

// Gerenciador de scroll otimizado
const scrollManager = {
	scrollPosition: 0,
	lastActiveIndex: 0,
	isTransitioning: false,
	touchStartY: 0,
	touchMoveY: 0,
	touchThreshold: 30,

	disable() {
		lenis.stop();
		this.scrollPosition = window.pageYOffset;
		document.body.style.overflow = "hidden";
		document.body.style.position = "fixed";
		document.body.style.top = `-${this.scrollPosition}px`;
		document.body.style.width = "100%";
		document.querySelector(".main-swiper").style.height = "100vh";
	},

	enable() {
		document.body.style.removeProperty("overflow");
		document.body.style.removeProperty("position");
		document.body.style.removeProperty("top");
		document.body.style.removeProperty("width");
		lenis.start();
	},

	async handleReturnToTop() {
		if (window.scrollY <= 50 && !this.isTransitioning) {
			this.isTransitioning = true;

			// Scroll suave até o topo
			await new Promise((resolve) => {
				lenis.scrollTo(0, {
					duration: 1.2,
					easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
				});
				setTimeout(resolve, 1200);
			});

			const mainSwiper = document.querySelector(".main-swiper");
			mainSwiper.style.height = "100svh";

			// Verifica visibilidade
			const checkVisibility = () => {
				const rect = mainSwiper.getBoundingClientRect();
				return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
			};

			// Aguarda visibilidade
			await new Promise((resolve) => {
				const check = setInterval(() => {
					if (checkVisibility()) {
						clearInterval(check);
						resolve();
					}
				}, 100);
			});

			this.disable();
			isScrollEnabled = false;
			scrollAttempts = 0;
			touchAttempts = 0;

			if (swiper.activeIndex !== this.lastActiveIndex) {
				swiper.slideTo(this.lastActiveIndex, 0);

				setTimeout(() => {
					if (slides[this.lastActiveIndex]?.timeline) {
						slides[this.lastActiveIndex].timeline.play();
					}
				}, 100);
			}

			this.isTransitioning = false;
		}
	},

	handleTouchStart(e) {
		this.touchStartY = e.touches[0].clientY;
	},

	handleTouchMove(e) {
		if (swiper.isEnd) {
			this.touchMoveY = e.touches[0].clientY;
			const touchDiff = this.touchStartY - this.touchMoveY;

			// Se o usuário deslizar para cima com força suficiente
			if (touchDiff > this.touchThreshold && !isScrollEnabled) {
				this.enableScrolling();
			}
		}
	},

	enableScrolling() {
		isScrollEnabled = true;
		this.enable();

		// Ajuste suave para dispositivos móveis
		lenis.scrollTo(window.innerHeight, {
			duration: 1,
			easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
			onComplete: () => {
				// Garante que o scroll esteja habilitado após a transição
				document.body.style.overflow = "auto";
				document.body.style.position = "static";
			},
		});
	},
};

// Inicialização do Swiper
const swiper = new Swiper(".main-swiper", {
	direction: "vertical",
	mousewheel: {
		sensitivity: 1,
		thresholdDelta: 30, // Reduzido para maior sensibilidade
	},
	touchRatio: 1.5, // Aumenta a sensibilidade do touch
	resistance: true,
	resistanceRatio: 0.85,
	speed: 800, // Velocidade reduzida para mobile
	effect: "fade",
	touchStartPreventDefault: false,

	breakpoints: {
		// Configurações específicas para mobile
		768: {
			touchRatio: 1,
			speed: 1000,
		},
	},

	on: {
		init: function () {
			scrollManager.disable();
		},
		slideChange: function () {
			isScrollEnabled = false;
			scrollManager.disable();
		},
		touchEnd: function () {
			if (this.isEnd) {
				touchAttempts = 0;
			}
		},
	},
});

// Variáveis de controle
let isScrollEnabled = false;
let scrollAttempts = 0;
let touchAttempts = 0;

// Adicionar aqui a verificação de dispositivo móvel
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Ajustes específicos para mobile
if (isMobile) {
	scrollManager.touchThreshold = 30;
	scrollAttempts = 0;
	touchAttempts = 0;
	// Outros ajustes específicos para mobile que você queira adicionar
}

// Eventos de scroll com Lenis
lenis.on("scroll", () => {
	scrollManager.handleReturnToTop();
});

// Detecção de scroll no final do swiper
window.addEventListener(
	"wheel",
	function (e) {
		if (swiper.isEnd) {
			if (e.deltaY > 0) {
				scrollAttempts++;

				if (scrollAttempts > 1 && !isScrollEnabled) {
					isScrollEnabled = true;
					scrollManager.enable();

					lenis.scrollTo(window.innerHeight + 50, {
						duration: 1.5,
						easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
					});
				}
			}
		}
	},
	{ passive: true }
);

// Touch events

window.addEventListener(
	"touchstart",
	(e) => {
		scrollManager.handleTouchStart(e);
	},
	{ passive: true }
);

// Adicione detecção de direção do touch
let touchDirection = null;
let lastTouchY = 0;

window.addEventListener(
	"touchmove",
	(e) => {
		// Lógica do handleTouchMove
		scrollManager.handleTouchMove(e);

		// Lógica da detecção de direção
		const currentTouchY = e.touches[0].clientY;

		if (lastTouchY) {
			touchDirection = currentTouchY > lastTouchY ? "down" : "up";
		}

		lastTouchY = currentTouchY;

		if (swiper.isEnd && touchDirection === "up") {
			touchAttempts++;

			if (touchAttempts > 0 && !isScrollEnabled) {
				scrollManager.enableScrolling();
			}
		}
	},
	{ passive: true }
);

// Adicione reset do touch ao final
window.addEventListener(
	"touchend",
	() => {
		lastTouchY = 0;
		touchDirection = null;
	},
	{ passive: true }
);

// Eventos do Swiper
swiper.on("slideChange", function () {
	scrollManager.lastActiveIndex = swiper.activeIndex;
	isScrollEnabled = false;
	scrollManager.disable();
	scrollAttempts = 0;
	touchAttempts = 0;
});

// Inicialização de slides e animações
const slides = document.querySelectorAll(".swiper-slide");
slides.forEach((slide) => {
	const slideType = slide.dataset.slideType;
	slide.timeline = SlideAnimations.createTimeline(slide, slideType);
});

// Eventos de animação do Swiper
swiper.on("slideNextTransitionStart", function (e) {
	let activeSlide = e.activeIndex - 1;

	$(".front .trigger").eq(activeSlide).click();

	if (slides[e.activeIndex]) {
		if (slides[activeSlide]) {
			slides[activeSlide].timeline.reverse();
		}
		setTimeout(() => {
			slides[e.activeIndex].timeline.play();
		}, SlideAnimations.defaults.delay * 1000);
	}
});

swiper.on("slidePrevTransitionStart", function (e) {
	let activeSlide = e.activeIndex;

	$(".back .trigger").eq(activeSlide).click();

	if (slides[e.activeIndex]) {
		if (slides[e.activeIndex + 1]) {
			slides[e.activeIndex + 1].timeline.reverse();
		}
		setTimeout(() => {
			slides[e.activeIndex].timeline.play();
		}, SlideAnimations.defaults.delay * 1000);
	}
});

// Animação inicial
window.addEventListener("load", () => {
	scrollManager.disable();
	if (slides[0]?.timeline) {
		slides[0].timeline.play();
	}
});
