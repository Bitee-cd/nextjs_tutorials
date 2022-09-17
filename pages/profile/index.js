import Link from "next/link"

const Profile =({blogId=6})=>{
    return (
        <div>
                    <p>This is the profile page</p>
                    <Link href={`/profile/${blogId}`}><a>blog 2</a></Link>
                    <Link href="/profile/100"><a>blog 5</a></Link>
        </div>

    )
}

export default Profile