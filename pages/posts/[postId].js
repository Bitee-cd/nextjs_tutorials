
import { post_api } from "../../components/constants"

const PostId = ({post}) => {



    return (
        <>
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        </>
    )
}
export default PostId

export async function getStaticPaths(){
    // const response = await fetch(post_api)
    // const data = await response.json()

    // const paths = data.map(post =>{
    //     return{
    //         params:{
    //             postId:`${post.id}`
    //         },
    //     }
    // })


    return{
        paths:[
            {
                params:{postId:'1'}
            },
            {
                params:{postId:'2'}
            },
            {
                params:{postId:'3'}
            },
        ],
        fallback:'blocking',
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`${post_api}/${params.postId}`)
    const post = await response.json()

    return{
        props:{
            post,
        }
    }
}