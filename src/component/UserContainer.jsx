import { Link } from "react-router-dom";

function UserContainer({users}){

    return(
       <div className="user-container">
            <ul className="flex flex-wrap gap-5 justify-center py-5">
                { users && users.map((user,idx)=>(

                    user.login && (
                    //user container
                    <li key={idx} className="flex w-[200px]  p-3 flex-col items-center hover:bg-yellow-100">
                        <img 
                        src={user.avatar_url} 
                        alt="avatar img" 
                        className="w-36 mb-4 border-2 border-black"
                        />

                        <h1 className="text-xl text-slate-800">{user.login}</h1>

                        <Link to={`${user?.login}`}>
                        <span className="text-gray-200 bg-blue-600 hover:bg-blue-400 my-3 font-semibold block py-1 px-4 tracking-wide rounded">
                            View
                        </span>
                        </Link>
                    </li>)
                    ))
                }
            </ul>
       </div>
    )
}

export default UserContainer;