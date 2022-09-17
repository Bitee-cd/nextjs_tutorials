import Link from "next/link"


const Home =()=>{


  return(
    <div>
    <h2>This is the Home Page</h2>
    <Link href="/users"><a>Users</a></Link>`
    <hr></hr>
    <Link href='/posts'><a>posts</a></Link>
    </div>
  )
}

export default Home