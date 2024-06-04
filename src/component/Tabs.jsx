//tabs below the userinfo
function Tabs({type, setType}){
    return(
        <>
            <button className={`${type === "repos" && "text-blue-700"}`} onClick={()=> setType("repos")}> Repositories</button>
            <button className={`${type === "received_events" && "text-blue-700"}`} onClick={()=> setType("received_events")}> Activity</button>
            <button className={`${type === "followers" && "text-blue-700"}`} onClick={()=> setType("followers")}> Followers</button>
        </>
    )
}
export default Tabs;