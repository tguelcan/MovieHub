import { c as create_ssr_component, d as compute_rest_props, f as spread, g as escape_object, h as escape_attribute_value, i as each } from "./index-04ee162a.js";
const Clock = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }] }, "solid": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", "clip-rule": "evenodd" }] } };
const Link = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }] }, "solid": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z", "clip-rule": "evenodd" }] } };
const Moon = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }] }, "solid": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" }] } };
const Search = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }] }, "solid": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", "clip-rule": "evenodd" }] } };
const Star = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }] }, "solid": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }] } };
const Sun = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }] }, "solid": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z", "clip-rule": "evenodd" }] } };
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let $$restProps = compute_rest_props($$props, ["src", "size", "solid"]);
  let { src } = $$props;
  let { size = "100%" } = $$props;
  let { solid = false } = $$props;
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  icon = src?.[solid ? "solid" : "default"];
  return `<svg${spread([
    escape_object(icon?.a),
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: escape_attribute_value(size) },
    { height: escape_attribute_value(size) },
    { "aria-hidden": "true" },
    escape_object($$restProps)
  ], {})}>${each(icon?.path ?? [], (a) => {
    return `<path${spread([escape_object(a)], {})}></path>`;
  })}</svg>`;
});
export { Clock as C, Icon as I, Link as L, Moon as M, Sun as S, Search as a, Star as b };
