import { error, redirect } from '@sveltejs/kit'

export async function load({ params }) {
    try{
        const post = await import(`../../../posts/${params.slug}.md`);

        if(!post.metadata.published) {
            throw redirect(302, '/blog')
        }

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch(e) {
        throw error(404, `Could not find ${params.slug}`)
    } 

}