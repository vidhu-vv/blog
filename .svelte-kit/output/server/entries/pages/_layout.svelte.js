import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: '.svelte-7xajds{box-sizing:border-box}.font-cor.svelte-7xajds{font-family:"Major Mono Display", sans-serif}.animate-link.svelte-7xajds:hover{animation:svelte-7xajds-link 0.5s ease-in-out;animation-fill-mode:forwards}.animate-home.svelte-7xajds{animation-duration:home-reverse 1s ease-in-out;animation-fill-mode:forwards}.animate-home.svelte-7xajds:hover{animation:svelte-7xajds-home 1s ease-in-out;animation-fill-mode:forwards}@keyframes svelte-7xajds-link{0%{color:auto}100%{color:violet}}@keyframes svelte-7xajds-home-reverse{0%{rotate:360deg;color:violet;scale:1.1}100%{rotate:0deg;color:auto;scale:1}}@keyframes svelte-7xajds-home{0%{rotate:0deg;color:auto;scale:1}100%{rotate:360deg;color:violet;scale:1.1}}',
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="fixed top-0 z-50 flex h-[74px] w-full bg-gray-700 md:sticky svelte-7xajds"><div class="w-screen max-w-6xl px-5 flex items-center justify-between svelte-7xajds"><div class="animate-home flex font-bold text-5xl svelte-7xajds"><button class="text-7xl py-5 font-cor svelte-7xajds" data-svelte-h="svelte-1suuzeb">V</button></div></div> <div class="w-full mx-20 flex justify-end svelte-7xajds"><div class="flex justify-items-end svelte-7xajds"><span class="animate-link svelte-7xajds"><button class="text-4xl p-5 mx-5 font-cor svelte-7xajds" data-svelte-h="svelte-18x8q4k">blog</button></span> <span class="animate-link svelte-7xajds"><button class="text-4xl py-5 font-cor svelte-7xajds" data-svelte-h="svelte-1ullzzx">About</button></span></div></div> </div>`;
});
const css = {
  code: ".transition.svelte-1sjzjez{height:100%;transition:opacity 0.5s ease}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `<div class="transition svelte-1sjzjez">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-u2bif3_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css?family=Major+Mono+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><!-- HEAD_svelte-u2bif3_END -->`, ""} <div class="grid bg-gray-700" style="grid-template: auto 1fr / 1fr">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <main class="bg-gray-700 mt-24 md:mt-0">${validate_component(Transition, "PageTransition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main></div>`;
});
export {
  Layout as default
};
