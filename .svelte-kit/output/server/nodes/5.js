import * as universal from '../entries/pages/blog/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.Ix2biiin.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/scheduler.y4_yNQPW.js","_app/immutable/chunks/index.Egxh8LVy.js","_app/immutable/chunks/utils.ICqXycyL.js"];
export const stylesheets = ["_app/immutable/assets/5.agSGdT4G.css"];
export const fonts = [];
