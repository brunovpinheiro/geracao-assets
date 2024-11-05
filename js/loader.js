document.addEventListener("DOMContentLoaded", function () {
	const filledPath = document.querySelector(".svg-path.filled");
	const FIRST_LOAD_DURATION = 6000;
	const CACHED_DURATION = 1500;
	const FADE_DURATION = 500; // Duração do fade em ms

	if (filledPath) {
		filledPath.style.animation = "none";
	}

	let currentProgress = 0;
	let targetProgress = 0;
	let animationFrame;

	const isFirstVisit = !localStorage.getItem("hasVisited");
	const duration = isFirstVisit ? FIRST_LOAD_DURATION : CACHED_DURATION;

	function updateProgress(target) {
		targetProgress = target;
		if (!animationFrame) {
			animationFrame = requestAnimationFrame(animate);
		}
	}

	function animate() {
		const speed = 0.05;
		const diff = targetProgress - currentProgress;

		if (Math.abs(diff) > 0.1) {
			currentProgress += diff * speed;

			if (filledPath) {
				filledPath.style.clipPath = `polygon(0 0, ${currentProgress}% 0, ${currentProgress}% 100%, 0 100%)`;
			}

			animationFrame = requestAnimationFrame(animate);
		} else {
			currentProgress = targetProgress;
			if (filledPath) {
				filledPath.style.clipPath = `polygon(0 0, ${currentProgress}% 0, ${currentProgress}% 100%, 0 100%)`;
			}
			animationFrame = null;
		}
	}

	function removeLoader() {
		const loader = document.querySelector(".fullscreen-loader");
		if (loader) {
			loader.classList.add("loader-hidden");
			// Aguarda a transição terminar antes de remover do DOM
			setTimeout(() => {
				loader.remove();
			}, FADE_DURATION);
		}
	}

	function simulateLoading() {
		const steps = [
			{ progress: 30, time: duration * 0.2 },
			{ progress: 50, time: duration * 0.4 },
			{ progress: 70, time: duration * 0.6 },
			{ progress: 85, time: duration * 0.8 },
			{ progress: 100, time: duration },
		];

		steps.forEach((step) => {
			setTimeout(() => {
				updateProgress(step.progress);
			}, step.time);
		});

		setTimeout(() => {
			removeLoader();
			if (isFirstVisit) {
				localStorage.setItem("hasVisited", "true");
			}
		}, duration);
	}

	updateProgress(0);
	simulateLoading();
});
