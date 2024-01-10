import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Hi I'm Vidhu",
  "description": "This is me because i am cool.",
  "date": "2024-1-7",
  "published": false,
  "thumbnail": "/vidhu.jpg"
};
const Post3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-mt4u92">Vidhu’s Villa</h2> <p data-svelte-h="svelte-r4whup">Vidhu is <em>awesome</em> he was so <strong>awesome</strong> that people were <span style="color:#5E9C9C">blinded</span> by his AWESOMENESS</p> <p data-svelte-h="svelte-1bzwjz4"><strong><em>SKADOOSH</em></strong></p>`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Post3,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
