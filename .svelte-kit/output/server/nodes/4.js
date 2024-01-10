import * as universal from '../entries/pages/blog/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.ts";
export const imports = ["_app/immutable/nodes/4.dGekG2mO.js","_app/immutable/chunks/scheduler.y4_yNQPW.js","_app/immutable/chunks/index.Egxh8LVy.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/paths.hLi1eP2f.js","_app/immutable/chunks/utils.ICqXycyL.js"];
export const stylesheets = ["_app/immutable/assets/4.svY_ro3u.css"];
export const fonts = [];
