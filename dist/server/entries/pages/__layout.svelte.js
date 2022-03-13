import { n as noop, a as safe_not_equal, c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "../../chunks/index-04ee162a.js";
import { I as Icon, S as Sun, M as Moon, a as Search } from "../../chunks/Icon-3ba561f3.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
let initialValue;
const theme = writable(initialValue);
theme.subscribe((value) => {
});
const FooterElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<footer class="${"bg-gray-light border-t dark:border-0 dark:bg-gray-dark"}"><div class="${"container py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"}"><div class="${"flex justify-center space-x-6 md:order-2"}"><button class="${"text-gray"}">${validate_component(Icon, "Icon").$$render($$result, {
    src: $theme === "dark" ? Sun : Moon,
    class: "w-6"
  }, {}, {})}</button></div>
		<div class="${"mt-8 md:mt-0 md:order-1"}"><p class="${"text-center text-sm text-gray"}">\xA9 2022 Movie HUB. All rights reserved.</p></div></div></footer>`;
});
var Logo = `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100"><path fill="currentColor" d="M50 36a14 14 0 1 0 12.9 8.55A14 14 0 0 0 50 36Zm0 20a6 6 0 1 1 6-6 6 6 0 0 1-6 6Z"/><path fill="currentColor" d="M81.39 43.75a3.87 3.87 0 0 0-5.26-2.81l-.23.06a3.89 3.89 0 0 0-2.34 4.38A24 24 0 1 1 50 26a23.81 23.81 0 0 1 4.73.48A3.83 3.83 0 0 0 59 24.09l.09-.21a3.87 3.87 0 0 0-2.84-5.27A32 32 0 0 0 18 48.82a32 32 0 1 0 63.36-5.07Z"/><circle fill="currentColor" cx="72" cy="28" r="4"/></svg>`;
const NavigationElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}"><div class="${"flex justify-between items-center"}"><div class="${"w-10 py-2 md:py-4"}"><a href="${"/"}" class="${"text-primary hover:text-primary-light transition-all"}"><!-- HTML_TAG_START -->${Logo}<!-- HTML_TAG_END --></a></div>
		<div><button class="${"inline-flex items-center p-2 border border-transparent rounded-full text-gray hover:bg-light dark:hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primary-light"}">${validate_component(Icon, "Icon").$$render($$result, { src: Search, class: "w-5" }, {}, {})}</button></div></div></div>`;
});
var app = "";
var typing = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-36qlcu"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin="${""}" data-svelte="svelte-36qlcu"><link href="${"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-36qlcu">`, ""}

<div class="${escape($theme) + " flex flex-col h-screen"}"><div class="${"sticky top-0 z-50 bg-gray-light dark:bg-gray-dark"}">${validate_component(NavigationElement, "NavigationElement").$$render($$result, {}, {}, {})}</div>
	<main class="${"bg-gray-light dark:bg-gray-dark flex-grow"}">${slots.default ? slots.default({}) : ``}</main>
	${validate_component(FooterElement, "FooterElement").$$render($$result, {}, {}, {})}</div>`;
});
export { _layout as default };
