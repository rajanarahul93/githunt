import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Tabs from "../Tabs";
import Repo from "../Type/Repo";
import Events from "../Type/Events";
import FollowersContainer from "../Type/FollowersContainer";

function UserInfo(){

    const [user,setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState("repos");
    const [infos,setInfos] = useState([]);
    const {pathname} = useLocation();
    // console.log(pathName);
    const navigate = useNavigate();

    //api
    let baseUrl = "https://api.github.com/users";

    // get userinfo input in serach button 
    async function getUserInfo(){
        setLoading(true)
        const res = await fetch(baseUrl + pathname)
        const data = await res.json();
        setUser(()=>[data]);
        console.log("data: ",data);
        setLoading(false)
    }

    // get url of type of clicked tabs 
    async function getUrls(){
        const res = await fetch(baseUrl + pathname + `/${type}`);
        const data = await res.json();
        console.log("type:",data);
        setInfos(data);
    }

    //useEffect
    useEffect(()=>{
        getUserInfo();
        getUrls();
    },[pathname,type])

    return (
        <div className="py-5">
            {/* back button  */}
            <button 
                onClick={()=> navigate('/')} 
                className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600  hover:bg-blue-700 rounded text-white"
            >
                Back
            </button>

            {/* userinfo container */}
            {  loading ? <Loading/> :
                user && user.map((user,i)=>(
                    <li key={i} className="flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10">
                        <img 
                            src={user.avatar_url} 
                            alt="avatar-image" 
                            className=" w-[350px] border-2 border-black md:mx-0 mx-auto"
                        />

                        <div className="text-lg px-3 leading-10 text-center lg:text-start md:text-start ">
                            <h1 className="text=3xl pb-4 font-bold text-red-950"> {user.name} </h1>
                            <h1>
                                <span className="text-purple-900 font-semibold"> Username</span> : {user.login}
                            </h1>
                            <h1>
                                <span className="text-purple-900 font-semibold"> Followers</span> : {user.followers}
                            </h1>
                            <h1>
                                <span className="text-purple-900 font-semibold"> Following</span> : {user.following}
                            </h1>
                            <h1>
                                <span className="text-purple-900 font-semibold"> Public_Repositories</span> : {user.public_repos}
                            </h1>
                            <h1>
                                <span className="text-purple-900 font-semibold"> Join</span> : {new Date(user.created_at).toLocaleDateString()}
                            </h1>
                            <a href={user.html_url} target="_blank" className=" text-white font-semibold rounded cursor-pointer px-4 py-1 bg-teal-600 my-3 tracking-wider hover:bg-blue-700"> Profile visit</a>
                        </div>
                    </li>
                ))
            }

            {/* tabs */}
            <div className=" flex border-b pb-4  gap-6 mt-[10%] mb-6 justify-center md:text-lg">
                <Tabs type={type} setType={setType}/>
            </div>

            {/* Repositories */}
            {type === "repos" && (
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 w-10/12 mx-auto">
                    {infos && <Repo repo={infos}/>}
                </div>
            )}

            {/* Activity */}
            {type === "received_events" && (
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 w-10/12 mx-auto">
                    { infos && <Events events={infos}/>}
                    
                </div>
            )}

            {/* Followers */}
            {type === "followers" && (
                <div>
                    <FollowersContainer users={infos}/>
                </div>
            )}
        </div>
    )
}

export default UserInfo;