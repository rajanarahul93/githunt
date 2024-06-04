function FollowersContainer({users}){

    //for tab's third type - Followers
    return(
       <div className="user-container">
            <ul className="flex flex-wrap gap-5 justify-center py-5">
                { users && users.map((user,idx)=>(

                    user.login && (

                        <li key={idx} className="flex w-[200px] hover:bg-yellow-100 p-3 flex-col items-center">
                            <img 
                                src={user.avatar_url} 
                                alt="avatar img" 
                                className="w-24 mb-4 border-2 border-black rounded-lg"
                            />
                            <a href={`https://github.com/${user.login}`} target="_blank" >
                                <h1 className="text-xl text-blue-900 hover:text-blue-950 font-semibold">{user.login}</h1>
                            </a>
                        </li>
                    )
                    ))
                }
            </ul>
       </div>
    )
}
export default FollowersContainer;