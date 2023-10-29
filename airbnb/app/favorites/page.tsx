
import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteListing from '../actions/getFavoriteListing'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import FavoritesClient from './FavoritesClient'

const ListingPage =async () => {
    const listing = await getFavoriteListing()
    const  currentUser = getCurrentUser()
    if(listing.length ===0){
        return (
            <ClientOnly>
                <EmptyState
                title='No favorites found'
                subtitle='Looks like you have no favorite listings'
                />
            </ClientOnly>
        )
    }
    return(
        <ClientOnly>
            <FavoritesClient
        listings={listing}
        currentUser={currentUser}
      />
        </ClientOnly>
    )
    
}

export default ListingPage