import {schema, normalize} from 'normalizr'

const postSchema = new schema.Entity('post')

export function postsNormalize(posts: IPost[]) {
  return normalize(posts, [postSchema])
}

export function postNormalize(posts: IPost[]) {
  return normalize(posts, postSchema)
}