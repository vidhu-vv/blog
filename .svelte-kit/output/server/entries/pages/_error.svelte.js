import { g as getContext, c as create_ssr_component, v as validate_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Hammer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"
      }
    ],
    ["path", { "d": "M17.64 15 22 10.64" }],
    [
      "path",
      {
        "d": "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "hammer" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Hammer$1 = Hammer;
const css = {
  code: ".error.svelte-14z39s1{display:grid;place-content:center;transform:translate(0, -12.5%);color:var(--secondary)}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-366wt1_START -->${$$result.title = `<title>Vidhu&#39;s Villa - ${escape($page.status)}</title>`, ""}<!-- HEAD_svelte-366wt1_END -->`, ""} <div class="h-screen grid place-content-center overflow-hidden bg-gray-700 error svelte-14z39s1"><div class="text-9xl text-purple-300 grid place-items-center py-32" data-svelte-h="svelte-1hb5p45">Oops!</div> <br> <div class="grid place-items-center py-32">${validate_component(Hammer$1, "Hammer").$$render($$result, { size: 128, color: "#ffffff" }, {}, {})}</div> <span class="text-6xl text-purple-300">Error ${escape($page.status)}: ${escape($page.error?.message)}</span> </div>`;
});
export {
  Error$1 as default
};
