import Link from "next/link"

const Post =({post})=>{

    return(
        <>
        <Link href={`posts/${post.id}`} passHref>
        <h1>{post.title}</h1>
        </Link>
        <p>{post.body}</p>
        </>
    )
}
export default Post