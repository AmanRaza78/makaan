"use server"
import prisma from "../db"

export async function getUserById(id:string) {
    return await prisma.user.findUnique({
        where:{
            id,
        }
    })
}

export async function updateUserProfilePic(avatarUrl:string, userId:string){
    return await prisma.user.update({
        where:{
            id:userId
        },
        data:{
            avatarUrl:avatarUrl
        }

    })
}