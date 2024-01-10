import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "AP Lang",
  "description": "I just clutched up on AP Lang.",
  "date": "2024-1-7",
  "published": true,
  "thumbnail": "/blog/vidhu.jpg"
};
const Ap_lang = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-4sbflz">AP Lang</h1> <h2 data-svelte-h="svelte-gbud2a">The Beginning</h2> <p data-svelte-h="svelte-v1aeim">I <em>finally</em> finished the <span style="color: green">first</span> semester of <strong>AP LANG</strong>.</p> <p data-svelte-h="svelte-2z9jf5"><img src="/favicon.png" alt="Svelte"></p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ap_lang,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
