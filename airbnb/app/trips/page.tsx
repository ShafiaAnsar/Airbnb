import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import TripsClient from "./TripsClient";
 

 const TripsPage = async () => {
    const currentnUser = await getCurrentUser()
    if(!currentnUser){
        return (
            <ClientOnly>
                <EmptyState
                title="Unauthorized"
                subtitle="Please login"
                />
            </ClientOnly>
        )
    }
    const reservations = await getReservations({userId:currentnUser.id})
    if(reservations.length == 0){
        return (
            <ClientOnly>
                <EmptyState 
                title="No trips found"
                subtitle="Looks like you have'nt reserved any trips "
                />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <TripsClient reservations={reservations} currentnUser={currentnUser} />

        </ClientOnly>
    )
} 
export default TripsPage