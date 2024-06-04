import {format} from "timeago.js";

//for tab's seconds type - Activity
function Events({events}){
    return(
        <>
            {events.map((event,i) => (
                <li key={i} className=" gap-x-4 flex flex-col lg:bg-red-100 md:bg-red-100 lg:pt-4 lg:pb-4 md:pt-4 md:pb-4 justify-center items-center lg:justify-start">
                    <img src={event.actor?.avatar_url} className="w-16 h-16 rounded-full border-2 border-black" alt="avatar-image" />
                    <div className="flex justify-center flex-col items-center">
                        <h1 className=" font-semibold">
                            {event?.actor?.login} 
                        </h1>
                        <h1 className=" font-semibold">
                            {event?.type}
                        </h1>
                        <h1>
                        {event?.repo?.name}
                        </h1>

                        <span className="text-sm">{format(event.created_at)}</span>
                    </div>
                     
                </li>
            ))}
        </>
    )
}

export default Events;