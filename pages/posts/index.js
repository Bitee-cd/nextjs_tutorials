import { post_api } from "../../components/constants"
import Post from "../../components/post"

const PostLists = ({posts})=>{
    return(
        <>
        {
            posts.map((post)=>(
                <div key={post.id}>
                    <Post post ={post}/>
                </div>
            ))
        }
        </>
    )
}

export default PostLists

export async function getStaticProps(){
    const response = await fetch (post_api)
    const posts = await response.json()

    return{
        props:{
            posts,
        }
    }
}