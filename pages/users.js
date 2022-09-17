import User from "../components/User"

const Users=({users})=>{

    return(
        <div>
            This is the list of users
            {users.map((user)=>(
                        <div key={user.id}>
                            <User user={user}/>
                        </div>
                ))
            }
        </div>
    )
}

export default Users

export async function getStaticProps (){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users)
    return{
        props:{
            users,
        }
    }
}