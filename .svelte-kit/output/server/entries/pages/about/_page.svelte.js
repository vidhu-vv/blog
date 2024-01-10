import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".text-custom.svelte-7r3z11{font-family:'Major Mono Display'}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-jnj2cx_START -->${$$result.title = `<title>
        Vidhu&#39;s Villa - About
    </title>`, ""}<!-- HEAD_svelte-jnj2cx_END -->`, ""} <div class="flex flex-col bg-gray-700 h-screen overflow-hidden"><div class="my-16 bg-gray-700 text-6xl h-30 text-custom mx-auto grid place-items-center rounded-3xl svelte-7r3z11" data-svelte-h="svelte-1oji463">About Me</div> <div class="flex flex-col items-center justify-center">${``}</div> </div>`;
});
export {
  Page as default
};
