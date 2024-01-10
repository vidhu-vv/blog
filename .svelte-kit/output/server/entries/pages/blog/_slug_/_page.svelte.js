import { c as create_ssr_component, e as escape, k as add_attribute, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
import { f as formatDate } from "../../../../chunks/utils.js";
const css = {
  code: ".text-custom.svelte-11l7q16{font-size:1.1rem}hr.svelte-11l7q16{border:0;height:1px;background-image:linear-gradient(\r\n            to right,\r\n            rgba(0, 0, 0, 0),\r\n            rgb(192, 139, 228),\r\n            rgba(0, 0, 0, 0)\r\n        );width:100%}article.svelte-11l7q16{max-inline-size:1200px;margin-inline:auto}.svelte-11l7q16{font-family:'Raleway', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-133p6h1_START -->${$$result.title = `<title>
        Vidhu&#39;s Villa - ${escape(data.meta.title)} </title>`, ""}<div class="my-16 bg-gray-700 text-6xl h-30 mx-auto grid place-items-center rounded-3xl svelte-11l7q16">${escape(data.meta.title)} </div><meta property="og:type" content="article" class="svelte-11l7q16"><meta property="og:title"${add_attribute("content", data.meta.title, 0)} class="svelte-11l7q16"><!-- HEAD_svelte-133p6h1_END -->`, ""} <article class="prose-sm svelte-11l7q16"><div class="flex flex-col bg-gray-700 h-screen overflow-hidden w-100 svelte-11l7q16"><div class="my-16 border-b-0 bg-gray-700 h-10 mx-auto grid place-items-center rounded-3xl svelte-11l7q16"><div class="font-bold text-purple-300 text-2xl h-fit svelte-11l7q16"><h1 class="title svelte-11l7q16"><span class="text-purple-300 svelte-11l7q16">${escape(data.meta.title)}</span> <span class="text-purple-500 svelte-11l7q16">on ${escape(formatDate(data.meta.date))}</span></h1></div></div> <div class="grid place-items-start text-custom h-1 font-extrabold text-purple-300 svelte-11l7q16"><p class="svelte-11l7q16">${escape(data.meta.description)}</p></div> <div class="grid place-items-start text-custom h-20 font-extrabold text-purple-300 svelte-11l7q16" data-svelte-h="svelte-vc70or"><hr class="svelte-11l7q16"></div> <div class="grid place-items-center svelte-11l7q16"><img${add_attribute("src", data.meta.thumbnail, 0)} alt="Thumbnail" class="svelte-11l7q16"></div> <div class="text-white svelte-11l7q16">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div> </article>`;
});
export {
  Page as default
};
