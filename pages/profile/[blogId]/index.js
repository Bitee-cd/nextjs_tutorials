import { useRouter } from "next/router"

const BlogId =()=>{
    const router = useRouter()
    const blogId = router.query.blogId
    return (
        <h1>This is what a function should look like {blogId}</h1>
    )
}

export default BlogId