import { _ as __vite_glob_0_0 } from "../../../../chunks/ap-lang.js";
import { _ as __vite_glob_0_1 } from "../../../../chunks/post3.js";
import { j as json } from "../../../../chunks/index.js";
async function getPosts() {
  let posts = [];
  const paths = /* @__PURE__ */ Object.assign({
    "/src/posts/ap-lang.md": __vite_glob_0_0,
    "/src/posts/post3.md": __vite_glob_0_1
  });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata;
      const post = { ...metadata, slug };
      post.published && posts.push(post);
    }
  }
  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );
  return posts;
}
async function GET() {
  const posts = await getPosts();
  return json(posts);
}
export {
  GET
};
