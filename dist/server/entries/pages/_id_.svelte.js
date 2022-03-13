import { c as create_ssr_component, e as escape, k as add_attribute, v as validate_component, i as each } from "../../chunks/index-04ee162a.js";
import { S as Swiper, a as Swiper_slide, R as Rating, m as movies, M as MovieSection } from "../../chunks/MovieSection-a5f5e127.js";
import { I as Icon, C as Clock, L as Link } from "../../chunks/Icon-3ba561f3.js";
const CastPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { person } = $$props;
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  return `<a href="${"/" + escape(person.id)}" class="${"bg-light dark:bg-gray-dark dark:text-gray-light"}"><div class="${"overflow-hidden relative group"}"><div class="${"absolute flex flex-col justify-end w-full h-full z-20 text-light"}"><div class="${"font-secondary text-center p-4 font-medium transition-all "}">${escape(person.name)}</div></div>
		<div class="${"bg-gradient-to-t from-dark to-transparent absolute z-10 w-full h-full hover:opacity-0"}"></div>
		<div class="${"bg-gradient-to-tr from-primary to-primary-light absolute z-10 w-full h-full opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out"}"></div>
		<img class="${"object-cover object-center bg-light w-full h-36 sm:h-48 group-hover:scale-105 transition-all duration-200"}" src="${"https://image.tmdb.org/t/p/w500" + escape(person.profile_path)}"${add_attribute("alt", person.name, 0)}></div></a>`;
});
const CastSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slidesPerView;
  let { collection } = $$props;
  let { cast = [] } = $$props;
  if ($$props.collection === void 0 && $$bindings.collection && collection !== void 0)
    $$bindings.collection(collection);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  return `

${validate_component(Swiper, "Swiper").$$render($$result, { spaceBetween: 10, slidesPerView }, {}, {
    default: () => {
      return `${each(cast, (person, index) => {
        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div>${validate_component(CastPreview, "CastPreview").$$render($$result, { person }, {}, {})}</div>
		`;
          }
        })}`;
      })}`;
    }
  })}`;
});
const MovieDetailHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  const getYear = (date) => {
    const d = new Date(date);
    return d.getFullYear();
  };
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  return `<div class="${"sm:flex items-top sm:space-x-4 z-20"}"><img class="${"h-48 sm:h-56 mt-1"}" src="${"https://image.tmdb.org/t/p/w300" + escape(movie.poster_path)}" alt="${"poster"}">
	<div class="${"flex flex-col dark:text-light"}"><span class="${"text-sm"}">${escape(movie.tagline)}</span>
		<div class="${"text-4xl font-secondary font-bold"}">${escape(movie.title)}</div>
		<div class="${"text-xs flex items-center space-x-6 mt-2 text-gray"}"><div class="${"flex space-x-1 items-center"}">${each(movie.genres, (genre, index) => {
    return `<div>${escape(genre.name)}</div>
					${movie.genres.length - 1 !== index ? `<div>|</div>` : ``}`;
  })}</div>
			${validate_component(Rating, "Rating").$$render($$result, { value: movie.vote_average }, {}, {})}</div>
		<div class="${"text-xs flex items-center space-x-1 text-gray font-medium"}"><div>${escape(getYear(movie.release_date))}</div>
			<div class="${"flex items-center space-x-1 "}">${validate_component(Icon, "Icon").$$render($$result, { src: Clock, class: "w-3" }, {}, {})}
				<span>${escape(movie.runtime)}</span></div></div>
		<p class="${"mt-2"}">${escape(movie.overview)}</p>
		<div class="${"flex items-center space-x-4 text-xs text-gray mt-2"}">${movie.homepage ? `<div class="${"flex items-center space-x-1"}">${validate_component(Icon, "Icon").$$render($$result, { src: Link, class: "w-3" }, {}, {})}
					<a rel="${"external"}"${add_attribute("href", movie.homepage, 0)} target="${"_blank"}">Homepage</a></div>` : ``}</div></div></div>`;
});
async function load({ params }) {
  const pageId = params.id;
  const [movie, similar, credits] = await Promise.allSettled([movies.getDetail(pageId), movies.getSimilar(pageId), movies.getCredits(pageId)]);
  return {
    props: {
      movie: movie.value.ok && await movie.value.json(),
      similar: similar.value.ok && await similar.value.json(),
      credits: credits.value.ok && await credits.value.json()
    }
  };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie, similar, credits } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  if ($$props.similar === void 0 && $$bindings.similar && similar !== void 0)
    $$bindings.similar(similar);
  if ($$props.credits === void 0 && $$bindings.credits && credits !== void 0)
    $$bindings.credits(credits);
  return `${$$result.head += `${$$result.title = `<title>${escape(movie.title)}</title>`, ""}`, ""}

<div><div class="${"container"}">${validate_component(MovieDetailHero, "MovieDetailHero").$$render($$result, { movie }, {}, {})}
		<div class="${"mt-4"}">${validate_component(CastSection, "CastSection").$$render($$result, { collection: credits.cast }, {}, {})}</div>
		<h2 class="${"my-4 "}">Similar Movies</h2>
		${validate_component(MovieSection, "MovieSection").$$render($$result, { collection: similar }, {}, {})}</div></div>`;
});
export { U5Bidu5D as default, load };
