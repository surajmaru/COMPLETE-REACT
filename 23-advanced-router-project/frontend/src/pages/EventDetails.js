import { useParams } from "react-router-dom";

function EventDetailPage() {

    const param = useParams();

    return ( 
        <>
            <h1>Event details page</h1>
            <p>Event Id: {param.eventId}</p>
        </>
     );
}

export default EventDetailPage;