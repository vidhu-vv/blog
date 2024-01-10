import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.ml0Fp5wZ.js","_app/immutable/chunks/scheduler.y4_yNQPW.js","_app/immutable/chunks/index.Egxh8LVy.js","_app/immutable/chunks/singletons.eJ491T3k.js","_app/immutable/chunks/paths.hLi1eP2f.js","_app/immutable/chunks/index.tptnM1PD.js"];
export const stylesheets = ["_app/immutable/assets/0.Oj7Rf1Bs.css"];
export const fonts = [];
