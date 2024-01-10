import { c as create_ssr_component, j as each, e as escape } from "../../../chunks/ssr.js";
import { f as formatDate } from "../../../chunks/utils.js";
const css = {
  code: ".posts.svelte-8wdm96.svelte-8wdm96{display:grid;gap:var(--size-7)}.post.svelte-8wdm96.svelte-8wdm96{max-inline-size:var(--size-content-3);margin:1em 0;padding:1em;border-radius:0.5em;background:#2d3542}.post.svelte-8wdm96.svelte-8wdm96:hover{background:#3c4858;transition:background 0.5s ease}.post.svelte-8wdm96:hover .title.svelte-8wdm96{color:#d8b4fe;transition:color 0.5s ease}.title.svelte-8wdm96.svelte-8wdm96{font-size:2rem;font-weight:bold;color:var(--secondary);text-transform:capitalize}.date.svelte-8wdm96.svelte-8wdm96{font-size:0.8em;color:#999}.description.svelte-8wdm96.svelte-8wdm96{font-size:1rem;color:#fff}.text-custom.svelte-8wdm96.svelte-8wdm96{font-family:'Major Mono Display'}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-120bsv5_START -->${$$result.title = `<title>Vidhu&#39;s Villa - Blogs</title>`, ""}<!-- HEAD_svelte-120bsv5_END -->`, ""} <div class="flex flex-col bg-gray-700 h-screen overflow-hidden"><div class="my-16 bg-gray-700 text-6xl h-30 text-custom mx-auto grid place-items-center rounded-3xl svelte-8wdm96" data-svelte-h="svelte-1ubhasl">blogs</div> <div class="flex flex-col items-center justify-center"><ul class="posts grid place-items-center svelte-8wdm96">${each(data.posts, (blog) => {
    return `<li class="post svelte-8wdm96"><a href="${"/blog/" + escape(blog.slug, true)}" class="title grid place-items-center svelte-8wdm96">${escape(blog.title)} <p class="date h-12 svelte-8wdm96">${escape(formatDate(blog.date))}</p> <p class="description svelte-8wdm96">${escape(blog.description)}</p></a> </li>`;
  })}</ul></div> </div>`;
});
export {
  Page as default
};
