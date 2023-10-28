import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/libs/prismadb'

interface IParams {
    listindId?:string
}

export  async function POSt(
    request:Request,
    {params}:{params:IParams}) {
    const currentUser = await getCurrentUser()
    if(!currentUser){
        return NextResponse.error()
    }
    const {listindId} = params
    if(!listindId || typeof listindId !==  'string'){
        throw new Error("Invalid ID")
    }
    let favoriteIds = {...(currentUser.favoriteIds || [])}
    favoriteIds.push(listindId)
    const user = await prisma.user.update({
        where:{
            id:currentUser.id
        },
        data:{
            favoriteIds:favoriteIds
        }
    })
    return Response.json(user)
}

export async function DELETE(
    request:Request, {params}:{params:IParams}
    ) {
        const currentUser = await getCurrentUser()
        if(!currentUser){
            return NextResponse.error()
        }
        const {listindId} = params
        if(!listindId || typeof listindId !==  'string'){
            throw new Error("Invalid ID")
        }
        let favoriteIds ={...(currentUser.favoriteIds || [])}
        favoriteIds.filter((id)=>  id !== listindId )
        const user = await prisma.user.update({
            where:{
                id:currentUser.id
            },
            data:{
                favoriteIds:favoriteIds
            }
        })
        return Response.json(user)
}