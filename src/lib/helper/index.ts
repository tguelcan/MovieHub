// See how the options work here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0
};

export const lazyLoad = (image, src) => {
	// receieves the img node and the src string
	const loaded = () => {
		image.classList.add('visible'); // manipulate the image node after load (trigger animations)
	};
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			image.src = src; // replace placeholder src with the image src on observe
			if (image.complete) {
				// check if instantly loaded
				loaded();
			} else {
				image.addEventListener('load', loaded); // if the image isn't loaded yet, add an event listener
			}
		}
	}, options);
	observer.observe(image); // intersection observer

	return {
		destroy() {
			image.removeEventListener('load', loaded); // clean up the event listener
		}
	};
};

export const wheel = (node, options) => {
	let { scrollable } = options;

	const handler = (e) => {
		if (!scrollable) e.preventDefault();
	};

	node.addEventListener('wheel', handler, { passive: false });

	return {
		update(options) {
			scrollable = options.scrollable;
		},
		destroy() {
			node.removeEventListener('wheel', handler, { passive: false });
		}
	};
};
