import { useRouter } from "next/router"

const Review =()=>{
    const router = useRouter()
    const {blogId,reviewId}= router.query

    return (
        <h2>This is the Review {reviewId} page for blog {blogId} </h2>
    )
}
export default Review