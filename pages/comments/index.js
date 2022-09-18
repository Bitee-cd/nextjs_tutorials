import { useState } from "react"

const Comments = ()=>{
    const [comments,setComments] = useState([])
    const [comment,setComment] = useState('')

    const fetchComments = async ()=>{
        const response = await fetch("/api/comments")
        const data = await response.json()
        setComments(data)

    }

    const submitComment = async () => {
        const response = await fetch("/api/comments",{
            method:"POST",
            body:JSON.stringify({comment}),
            headers:{
                'Content-Type':'application/json'
            },
        })
        const data = await response.json()
        console.log(data)
        
    }
    return (
        <>
        <button onClick ={fetchComments}>fetch Comments</button>
        {
            comments.map((comment)=>(
                <div key ={comment.id}>
                    <h2>Comment {comment.id}</h2>
                    <p>{comment.text}</p>
                </div>
            ))
        }
        <div>
        <input
        type="text"
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        />
        <button onClick={submitComment}>submit comment</button>
        </div>
        </>
    )
}
export default Comments