import { c as create_ssr_component, v as validate_component, o as onDestroy } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "20",
        "x": "2",
        "y": "2",
        "rx": "5",
        "ry": "5"
      }
    ],
    [
      "path",
      {
        "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    ],
    [
      "line",
      {
        "x1": "17.5",
        "x2": "17.51",
        "y1": "6.5",
        "y2": "6.5"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "instagram" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Instagram$1 = Instagram;
const css = {
  code: "div.svelte-17qtarx{font-family:'Major Mono Display';font-size:22px}.animate-text.svelte-17qtarx{animation:svelte-17qtarx-idle 5s infinite}@keyframes svelte-17qtarx-idle{0%,100%{scale:1;rotate:0deg}25%{rotate:5deg}50%{scale:1.1}75%{rotate:-5deg}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roller;
  onDestroy(() => {
    clearInterval(roller);
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1f8dut3_START -->${$$result.title = `<title>
		Vidhu&#39;s Villa
	</title>`, ""}<!-- HEAD_svelte-1f8dut3_END -->`, ""} <div class="flex flex-col bg-gray-700 h-screen overflow-hidden svelte-17qtarx"><div class="h-screen flex flex-col col-span-3 svelte-17qtarx"><div class="flex-1 w-full svelte-17qtarx"><div class="my-16 bg-gray-700 border-4 border-secondary w-[90%] h-80 mx-auto grid place-items-center rounded-3xl svelte-17qtarx"><div class="animate-text text-justify text-secondary svelte-17qtarx"><button class="text-7xl font-bold transition duration-200 ease-in-out hover:scale-110 hover:text-purple-300" data-svelte-h="svelte-3vg81j">VIDHU&#39;S VILLA</button></div></div></div> <div class="flex-1 w-full overflow-hidden svelte-17qtarx"><div class="my-16 bg-gray-700 mx-auto grid place-items-center rounded-3xl svelte-17qtarx"><button class="animate-text flex text-3xl font-bold transition duration-200 hover:scale-110 hover:text-purple-300 svelte-17qtarx">${`${validate_component(Instagram$1, "Instagram").$$render($$result, { size: 128 }, {}, {})}`}</button></div></div></div> </div>`;
});
export {
  Page as default
};
