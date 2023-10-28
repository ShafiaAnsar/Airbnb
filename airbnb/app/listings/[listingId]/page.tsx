// 'use client'

import getCurrentUser from "@/app/actions/getCurrentUser"
import getListingId from "@/app/actions/getListingById"
import ClientOnly from "@/app/components/ClientOnly"
import EmptyState from "@/app/components/EmptyState"
import ListingClient from "./ListingClient"

interface IParams{
    listingId?:string
}

const ListingPage = async ({params}:{params:IParams}) => {
    const currentUser = await getCurrentUser()
    const listing = await getListingId(params)
    if(!listing){
        return (
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }

  return (
    <ClientOnly>
        <ListingClient
        listing ={listing}
        currentUser={currentUser}
        />
    </ClientOnly>
  )
}

export default ListingPage 