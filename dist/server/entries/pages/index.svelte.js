import { c as create_ssr_component, e as escape, v as validate_component, i as each } from "../../chunks/index-04ee162a.js";
import { g as getDocument, n as nextTick, R as Rating, S as Swiper, a as Swiper_slide, m as movies, M as MovieSection } from "../../chunks/MovieSection-a5f5e127.js";
import "../../chunks/Icon-3ba561f3.js";
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  function run() {
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr("data-swiper-autoplay")) {
      delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
    }
    clearTimeout(timeout);
    timeout = nextTick(() => {
      let autoplayResult;
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit("autoplay");
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit("autoplay");
      } else {
        stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running)
        run();
      else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }
  function start() {
    if (typeof timeout !== "undefined")
      return false;
    if (swiper.autoplay.running)
      return false;
    swiper.autoplay.running = true;
    emit("autoplayStart");
    run();
    return true;
  }
  function stop() {
    if (!swiper.autoplay.running)
      return false;
    if (typeof timeout === "undefined")
      return false;
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    swiper.autoplay.running = false;
    emit("autoplayStop");
    return true;
  }
  function pause(speed) {
    if (!swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused)
      return;
    if (timeout)
      clearTimeout(timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ["transitionend", "webkitTransitionEnd"].forEach((event) => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }
  function onVisibilityChange() {
    const document = getDocument();
    if (document.visibilityState === "hidden" && swiper.autoplay.running) {
      pause();
    }
    if (document.visibilityState === "visible" && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl)
      return;
    if (e.target !== swiper.$wrapperEl[0])
      return;
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;
    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }
  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit("autoplayPause");
      pause();
    }
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }
  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
    run();
  }
  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on("mouseenter", onMouseEnter);
      swiper.$el.on("mouseleave", onMouseLeave);
    }
  }
  function detachMouseEvents() {
    swiper.$el.off("mouseenter", onMouseEnter);
    swiper.$el.off("mouseleave", onMouseLeave);
  }
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = getDocument();
      document.addEventListener("visibilitychange", onVisibilityChange);
      attachMouseEvents();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on("touchEnd", () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    if (swiper.autoplay.running) {
      stop();
    }
    const document = getDocument();
    document.removeEventListener("visibilitychange", onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect)
      return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate", () => {
    if (swiper.params.effect !== effect)
      return;
    setTranslate();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect)
      return;
    setTransition(duration);
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}
function effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    });
  }
  return $slideEl;
}
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformEl,
    allSlides
  } = _ref;
  const {
    slides,
    activeIndex,
    $wrapperEl
  } = swiper;
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let $transitionEndTarget;
    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }
    $transitionEndTarget.transitionEnd(() => {
      if (eventTriggered)
        return;
      if (!swiper || swiper.destroyed)
        return;
      eventTriggered = true;
      swiper.animating = false;
      const triggerEvents = ["webkitTransitionEnd", "transitionend"];
      for (let i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}
function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false,
      transformEl: null
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate)
        tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.css({
        opacity: slideOpacity
      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  };
  const setTransition = (duration) => {
    const {
      transformEl
    } = swiper.params.fadeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };
  effectInit({
    effect: "fade",
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
const MovieHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  const getYear = (date) => {
    const d = new Date(date);
    return d.getFullYear();
  };
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  return `<a href="${"/" + escape(movie.id)}" class="${"bg-light dark:bg-gray-dark dark:text-gray-light"}"><div class="${"relative group"}"><div class="${"absolute flex flex-col justify-between w-full h-full z-20 text-light"}"><div class="${"p-6"}">${validate_component(Rating, "Rating").$$render($$result, { value: movie.vote_average }, {}, {})}</div>
			<div class="${"p-6 flex flex-col space-y-1"}"><div class="${"text-6xl font-secondary font-bold group-hover:text-6xl transition-all"}">${escape(movie.title)}</div>
				<div class="${"text-sm"}">${escape(getYear(movie.release_date))}</div>
				<p class="${"font-light max-w-xl line-clamp-3 leading-snug"}">${escape(movie.overview)}</p></div></div>
		<div class="${"bg-gradient-to-tr from-dark to-transparent mix-blend-multiply absolute z-10 w-full h-full transition-all group-hover:opacity-50"}"></div>
		<img class="${"object-cover object-center bg-light w-full h-80 sm:h-[32rem] group-hover:scale-105 transition-all duration-200"}" src="${"https://image.tmdb.org/t/p/original" + escape(movie.backdrop_path)}" alt="${"poster"}"></div></a>`;
});
var effectFade_min = "";
var pagination_min = "";
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { collection } = $$props;
  let { movies: movies2 = { results: [] } } = $$props;
  if ($$props.collection === void 0 && $$bindings.collection && collection !== void 0)
    $$bindings.collection(collection);
  if ($$props.movies === void 0 && $$bindings.movies && movies2 !== void 0)
    $$bindings.movies(movies2);
  return `<div class="${"xl:container"}">${validate_component(Swiper, "Swiper").$$render($$result, {
    modules: [EffectFade, Autoplay],
    effect: "fade",
    autoplay: { delay: 5e3, disableOnInteraction: false },
    speed: 750,
    slidesPerView: 1
  }, {}, {
    default: () => {
      return `${each(movies2.results, (movie) => {
        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div>${validate_component(MovieHero, "MovieHero").$$render($$result, { movie }, {}, {})}</div>
			`;
          }
        })}`;
      })}`;
    }
  })}</div>`;
});
async function load() {
  const [popular, upcoming] = await Promise.allSettled([movies.getPopular(), movies.getUpcoming()]);
  return {
    props: {
      popular: popular.value.ok && await popular.value.json(),
      upcoming: upcoming.value.ok && await upcoming.value.json()
    }
  };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular, upcoming } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  if ($$props.upcoming === void 0 && $$bindings.upcoming && upcoming !== void 0)
    $$bindings.upcoming(upcoming);
  return `<div class="${"mb-6"}">${validate_component(HeroSection, "HeroSection").$$render($$result, { collection: upcoming }, {}, {})}</div>

<div class="${"container space-y-6"}"><div><h2>Discover Popular Movies</h2>
		${validate_component(MovieSection, "MovieSection").$$render($$result, { collection: popular }, {}, {})}</div>
	<div><h2>Upcoming</h2>
		${validate_component(MovieSection, "MovieSection").$$render($$result, { collection: upcoming }, {}, {})}</div></div>`;
});
export { Routes as default, load };
